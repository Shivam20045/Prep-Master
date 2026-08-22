"use client";

import { useAuth } from "@clerk/nextjs";
import { CheckoutButton } from "@clerk/nextjs/experimental";
import { SignInButton } from "@clerk/nextjs";
import { PLANS } from "@/lib/data";

export default function PricingSection() {
  const { has, userId } = useAuth();

  const isSignedIn = !!userId;
  const isOnStarter = isSignedIn && has({ plan: "starter" });
  const isOnPro = isSignedIn && has({ plan: "pro" });
  const isOnFree = isSignedIn && !isOnStarter && !isOnPro;

  const activePlanSlug = isOnPro
    ? "pro"
    : isOnStarter
    ? "starter"
    : isOnFree
    ? "free"
    : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {PLANS.map((plan) => {
        const isActive = activePlanSlug === plan.slug;

        return (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-10 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 ${
              plan.featured
                ? "bg-white border border-violet-200 shadow-xl shadow-violet-100"
                : "bg-white border border-slate-200 hover:border-violet-100 shadow-sm"
            } ${isActive ? "ring-1 ring-violet-300" : ""}`}
          >
            {/*Popular badge */}
            {plan.featured && !isActive && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold tracking-wide uppercase px-3.5 py-1 rounded-full whitespace-nowrap">
                Most Popular
              </span>
            )}

            <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-5">
              {plan.name}
            </p>

            <div className="flex items-end gap-1 mb-1.5">
              <span
                className={`font-serif text-5xl leading-none tracking-tight ${
                  plan.featured
                    ? "bg-linear-to-br from-violet-500 to-violet-700 bg-clip-text text-transparent"
                    : "bg-linear-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent"
                }`}
              >
                {plan.price}
              </span>
              <span className="text-sm text-slate-400 font-light mb-1.5">
                /month
              </span>
            </div>

            <p className="text-sm text-violet-600 font-semibold mb-7">
              {plan.credits}
            </p>

            <div className="h-px bg-slate-200 mb-7" />

            <ul className="space-y-3 mb-9 flex-1">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-sm text-slate-500"
                >
                  <span className="text-emerald-500 text-xs mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            {isActive ? (
              <button
                disabled
                className={`w-full text-center rounded-full py-3 text-sm font-semibold opacity-50 cursor-not-allowed ${
                  plan.featured
                    ? "bg-violet-600 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                ✓ Current plan
              </button>
            ) : plan.planId === null ? (
              isSignedIn ? (
                <button
                  disabled
                  className="w-full text-center rounded-full py-3 text-sm font-semibold border border-slate-200 text-slate-400 opacity-50 cursor-not-allowed"
                >
                  Default plan
                </button>
              ) : (
                <SignInButton mode="modal">
                  <button className="w-full text-center rounded-full py-3 text-sm font-semibold border border-slate-200 text-slate-900 hover:border-violet-300 hover:text-violet-600 transition">
                    Get started free
                  </button>
                </SignInButton>
              )
            ) : isSignedIn ? (
              <CheckoutButton
                planId={plan.planId}
                planPeriod="month"
                checkoutProps={{
                  appearance: {
                    elements: {
                      drawerRoot: {
                        zIndex: 2000,
                      },
                    },
                  },
                }}
              >
                <button
                  className={`w-full text-center rounded-full py-3 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-600/25"
                      : "border border-slate-200 text-slate-900 hover:border-violet-300 hover:text-violet-600"
                  }`}
                >
                  {activePlanSlug === "pro" && plan.slug === "starter"
                    ? "Downgrade"
                    : activePlanSlug === "starter" && plan.slug === "pro"
                    ? "Upgrade →"
                    : "Get started →"}
                </button>
              </CheckoutButton>
            ) : (
              <SignInButton mode="modal">
                <button
                  className={`w-full text-center rounded-full py-3 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-600/25"
                      : "border border-slate-200 text-slate-900 hover:border-violet-300 hover:text-violet-600"
                  }`}
                >
                  Get started →
                </button>
              </SignInButton>
            )}
          </div>
        );
      })}
    </div>
  );
}
