'use client';

import type { CSSProperties } from "react";
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

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // گرفتن شماره استپ فعلی از URL
  const currentStep = Number(pathname.split('step-')[1] || 1);

  return (
    <div style={{ padding: '40px' }}>
      <h1 style={styles.heading}>Apply For Funding</h1>

      <div style={styles.container}>

        {/* Sidebar */}
        <aside style={styles.sidebar}>

          {steps.map((step) => {

            const stepNumbers = step.items.map(i => i.step);
            const maxStepInGroup = Math.max(...stepNumbers);
            const minStepInGroup = Math.min(...stepNumbers);

            const isStepActive =
              currentStep >= minStepInGroup &&
              currentStep <= maxStepInGroup;

            const isStepCompleted =
              currentStep > maxStepInGroup;

            return (
              <div key={step.id} style={styles.stepWrapper}>

                {/* Circle + Line */}
                <div style={styles.circleColumn}>

                  <div
                    style={{
                      ...styles.circle,
                      backgroundColor:
                        isStepActive || isStepCompleted ? '#22c55e' : '#fff',
                      color:
                        isStepActive || isStepCompleted ? '#fff' : '#000',
                      borderColor:
                        isStepActive || isStepCompleted ? '#22c55e' : '#ccc',
                    }}
                  >
                    {isStepCompleted ? '✓' : step.id}
                  </div>

                  {step.id !== steps.length && (
                    <div style={styles.line} />
                  )}
                </div>

                {/* Text */}
                <div>
                  <Link
                    href={step.href}
                    style={{
                      ...styles.title,
                      color:
                        isStepActive || isStepCompleted
                          ? '#22c55e'
                          : '#000',
                      fontWeight: isStepActive ? '600' : '400',
                    }}
                  >
                    {step.title}
                  </Link>

                  <ul style={styles.subList}>
                    {step.items.map((item, i) => {

                      const isItemActive = currentStep === item.step;
                      const isItemCompleted = currentStep > item.step;

                      return (
                        <li
                          key={i}
                          style={{
                            ...styles.subItem,
                            color:
                              isItemActive || isItemCompleted
                                ? '#22c55e'
                                : '#777',
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
        <main style={styles.main}>
          {children}
        </main>

      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    display: 'flex',
    gap: '32px',
    padding: '30px 130px',
  },

  sidebar: {
    width: '300px',
    padding: '20px',
    borderRadius: '20px',
    border: '1px solid #929292',
    background: '#F4F4F4',
  },

  main: {
    flex: 1,
    height: "440px",
    padding: '30px',
    borderRadius: '20px',
    border: '1px solid #929292',
    background: '#F4F4F4',
  },

  heading: {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '30px',
  },

  stepWrapper: {
    display: 'flex',
    gap: '12px',
    marginBottom: '20px',
  },

  circleColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  circle: {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    border: '2px solid #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    fontWeight: '600',
  },

  line: {
    width: '2px',
    height: '40px',
    background: '#ddd',
    marginTop: '4px',
  },

  title: {
    textDecoration: 'none',
    fontSize: '14px',
  },

  subList: {
    paddingLeft: '14px',
    marginTop: '4px',
  },

  subItem: {
    fontSize: '12px',
    marginBottom: '4px',
  },
};
