'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Loader2, LogOut, ShoppingBag, DollarSign, Users } from 'lucide-react';

interface PurchaseItem {
  id: string;
  email: string;
  amount: number;
  status: string;
  downloadCount: number;
  createdAt: string;
}

export function AdminDashboard() {
  const { data: session, status } = useSession() || {};
  const router = useRouter();
  const [purchases, setPurchases] = useState<PurchaseItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/admin/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/admin/purchases')
        .then((r: any) => r?.json())
        .then((d: any) => setPurchases(d?.purchases ?? []))
        .catch(() => {})
        .finally(() => setLoading(false));
    }
  }, [status]);

  if (status === 'loading' || status === 'unauthenticated') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const totalRevenue = (purchases ?? [])?.reduce((acc: number, p: any) => acc + (p?.amount ?? 0), 0) / 100;
  const totalSales = purchases?.length ?? 0;
  const uniqueEmails = new Set((purchases ?? [])?.map((p: any) => p?.email))?.size ?? 0;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 px-6 py-4 flex items-center justify-between">
        <h1 className="font-display text-lg font-bold gradient-text">Admin Dashboard</h1>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <LogOut className="w-4 h-4" /> Sair
        </button>
      </header>

      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-card border border-border/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5 text-green-500" />
              <span className="text-sm text-muted-foreground">Receita Total</span>
            </div>
            <p className="font-display text-2xl font-bold">R$ {totalRevenue?.toFixed?.(2) ?? '0.00'}</p>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <ShoppingBag className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Vendas</span>
            </div>
            <p className="font-display text-2xl font-bold">{totalSales}</p>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-secondary" />
              <span className="text-sm text-muted-foreground">Clientes</span>
            </div>
            <p className="font-display text-2xl font-bold">{uniqueEmails}</p>
          </div>
        </div>

        {/* Purchases Table */}
        <div className="bg-card border border-border/50 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border/50">
            <h2 className="font-display font-semibold">Compras Recentes</h2>
          </div>
          {loading ? (
            <div className="p-8 text-center">
              <Loader2 className="w-6 h-6 animate-spin text-primary mx-auto" />
            </div>
          ) : (purchases?.length ?? 0) === 0 ? (
            <div className="p-8 text-center text-muted-foreground text-sm">Nenhuma compra ainda.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-muted-foreground border-b border-border/50">
                    <th className="px-6 py-3 font-medium">Email</th>
                    <th className="px-6 py-3 font-medium">Valor</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                    <th className="px-6 py-3 font-medium">Downloads</th>
                    <th className="px-6 py-3 font-medium">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {(purchases ?? [])?.map((p: any) => (
                    <tr key={p?.id} className="border-b border-border/30 hover:bg-muted/30">
                      <td className="px-6 py-3">{p?.email}</td>
                      <td className="px-6 py-3">R$ {((p?.amount ?? 0) / 100)?.toFixed?.(2)}</td>
                      <td className="px-6 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          p?.status === 'completed' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                        }`}>
                          {p?.status}
                        </span>
                      </td>
                      <td className="px-6 py-3">{p?.downloadCount ?? 0}</td>
                      <td className="px-6 py-3 text-muted-foreground">
                        {p?.createdAt ? new Date(p.createdAt).toLocaleDateString('pt-BR') : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
