'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const steps = [
  {
    id: 1,
    title: 'Personal Information',
    href: '/form/step-1',
    items: [
      { label: 'Contact Information', step: 1 },
      { label: 'Company Overview', step: 2 },
      { label: 'Company Address', step: 3 },
    ],
  },
  {
    id: 2,
    title: 'Company Business Model',
    href: '/form/step-4',
    items: [
      { label: 'Business Summary', step: 4 },
      { label: 'Problem', step: 5 },
      { label: 'Solution', step: 6 },
    ],
  },
  {
    id: 3,
    title: 'Company Stage & Growth',
    href: '/form/step-7',
    items: [
      { label: 'Stage & Growth', step: 7 },
    ],
  },
  {
    id: 4,
    title: 'Documents & Confirmation',
    href: '/form/step-8',
    items: [
      { label: 'Supporting Documents', step: 8 },
      { label: 'Legal Declarations', step: 9 },
    ],
  },
];

const allStepItems = steps.flatMap(group => group.items);
const totalSteps = allStepItems.length;

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const currentStep = Number(pathname.split('step-')[1] || 1);
  const currentStepLabel = allStepItems.find(s => s.step === currentStep)?.label ?? '';
  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div className="px-4 py-8 md:px-10 lg:px-16">
      <h1 className="text-center text-2xl font-semibold mb-6">Apply For Funding</h1>

      {/* Mobile progress indicator — hidden on desktop */}
      <div className="lg:hidden mb-6 px-1">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Step {currentStep} of {totalSteps}</span>
          <span>{currentStepLabel}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#8F27FF] rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">

        {/* Sidebar — hidden on mobile */}
        <aside className="hidden lg:block w-[300px] p-5 rounded-2xl border border-[#929292] bg-[#F4F4F4] shrink-0">

          {steps.map((step) => {
            const stepNumbers = step.items.map(i => i.step);
            const maxStepInGroup = Math.max(...stepNumbers);
            const minStepInGroup = Math.min(...stepNumbers);

            const isStepActive = currentStep >= minStepInGroup && currentStep <= maxStepInGroup;
            const isStepCompleted = currentStep > maxStepInGroup;

            return (
              <div key={step.id} className="flex gap-3 mb-5">

                <div className="flex flex-col items-center">
                  <div
                    className="w-[26px] h-[26px] rounded-full border-2 flex items-center justify-center text-[13px] font-semibold shrink-0"
                    style={{
                      backgroundColor: isStepActive || isStepCompleted ? '#22c55e' : '#fff',
                      color: isStepActive || isStepCompleted ? '#fff' : '#000',
                      borderColor: isStepActive || isStepCompleted ? '#22c55e' : '#ccc',
                    }}
                  >
                    {isStepCompleted ? '✓' : step.id}
                  </div>

                  {step.id !== steps.length && (
                    <div className="w-0.5 h-10 bg-[#ddd] mt-1" />
                  )}
                </div>

                <div>
                  <Link
                    href={step.href}
                    className="text-sm no-underline"
                    style={{
                      color: isStepActive || isStepCompleted ? '#22c55e' : '#000',
                      fontWeight: isStepActive ? '600' : '400',
                    }}
                  >
                    {step.title}
                  </Link>

                  <ul className="pl-3.5 mt-1">
                    {step.items.map((item, i) => {
                      const isItemActive = currentStep === item.step;
                      const isItemCompleted = currentStep > item.step;

                      return (
                        <li
                          key={i}
                          className="text-xs mb-1"
                          style={{
                            color: isItemActive || isItemCompleted ? '#22c55e' : '#777',
                            fontWeight: isItemActive ? '600' : '400',
                          }}
                        >
                          • {item.label}
                        </li>
                      );
                    })}
                  </ul>
                </div>

              </div>
            );
          })}

        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-[440px] p-6 md:p-8 rounded-2xl border border-[#929292] bg-[#F4F4F4]">
          {children}
        </main>

      </div>
    </div>
  );
}
