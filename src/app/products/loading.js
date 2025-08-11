// app/(marketing)/products/loading.tsx
export default function Loading() {
  return (
    <div className="space-y-4">
      <div className="h-10 rounded bg-amber-100 animate-pulse" />
      <div className="h-10 rounded bg-amber-100 animate-pulse" />
      <div className="h-64 rounded bg-amber-100 animate-pulse" />
    </div>
  );
}
