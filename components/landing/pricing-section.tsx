'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useInView } from 'react-intersection-observer'

interface PricingCardProps {
  name: string
  price: number
  description: string
  features: string[]
  highlighted: boolean
  inView: boolean
}

const PricingCard = ({
  name,
  price,
  description,
  features,
  highlighted,
  inView,
}: PricingCardProps) => {
  return (
    <div
      className={`transition-all duration-700 ${
        highlighted && inView
          ? 'md:scale-105 relative border-2 border-primary shadow-2xl'
          : 'border border-border'
      } rounded-2xl bg-background p-8 space-y-8`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Paling Populer
          </span>
        </div>
      )}

      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-foreground">{name}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-foreground">
            Rp {price.toLocaleString('id-ID')}
          </span>
          <span className="text-muted-foreground">/bulan</span>
        </div>
        <p className="text-xs text-muted-foreground">Billed monthly</p>
      </div>

      <Button
        className={`w-full transition ${
          highlighted
            ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
            : 'border border-border hover:bg-secondary'
        }`}
        size="lg"
      >
        Mulai Gratis
      </Button>

      <div className="space-y-4 pt-4 border-t border-border">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PricingSection() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  const plans = [
    {
      name: 'Starter',
      price: 99000,
      description: 'Untuk UMKM baru',
      features: [
        'Hingga 1 chatbot',
        '1,000 percakapan/bulan',
        'Email support',
        'Customization dasar',
      ],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: 299000,
      description: 'Untuk bisnis berkembang',
      features: [
        'Hingga 5 chatbot',
        '10,000 percakapan/bulan',
        'Priority email & chat support',
        'Customization penuh',
        'Analytics dashboard',
        'API access',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 999000,
      description: 'Untuk perusahaan besar',
      features: [
        'Unlimited chatbots',
        'Unlimited conversations',
        '24/7 phone support',
        'Dedicated account manager',
        'Custom integration',
        'On-premise deployment',
        'Advanced security',
      ],
      highlighted: false,
    },
  ]

  return (
    <section
      id="pricing"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Harga Transparan & Terjangkau
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
            />
          ))}
        </div>

        <div className="text-center mt-16 p-8 bg-background rounded-xl border border-border">
          <p className="text-muted-foreground mb-4">
            Membutuhkan solusi custom? Hubungi tim kami
          </p>
          <a
            href="mailto:sales@example.com"
            className="text-primary font-semibold hover:underline"
          >
            sales@example.com
          </a>
        </div>
      </div>
    </section>
  )
}
