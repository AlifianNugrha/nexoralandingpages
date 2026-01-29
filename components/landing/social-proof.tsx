export default function SocialProof() {
  const companies = [
    'TechCorp',
    'StartupPro',
    'Digital.id',
    'CloudSync',
    'DataFlow',
    'InnovateLabs',
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-y border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-muted-foreground mb-12 text-sm font-medium uppercase tracking-wide">
          Dipercaya oleh ratusan perusahaan
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company}
              className="text-lg font-semibold text-muted-foreground opacity-60 hover:opacity-100 transition"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
