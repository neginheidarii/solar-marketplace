"use client";

import { useState } from "react";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const CheckoutSchema = z.object({
  name: z.string().min(2, { message: "Please enter your full name." }),
  email: z.string().email({ message: "Enter a valid email address." }),
  address: z
    .string()
    .min(5, { message: "Please enter your shipping address." }),
});

type FormData = z.infer<typeof CheckoutSchema>;
type FieldErrors = Partial<Record<keyof FormData, string>>;

export default function CheckoutForm() {
  const router = useRouter();

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange =
    (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      setErrors((err) => ({ ...err, [key]: undefined }));
      setFormError(null);
    };

  const validate = (data: FormData) => {
    const result = CheckoutSchema.safeParse(data);
    if (result.success) {
      setErrors({});
      return true;
    }
    const flat = result.error.flatten().fieldErrors;
    setErrors({
      name: flat.name?.[0],
      email: flat.email?.[0],
      address: flat.address?.[0],
    });
    return false;
  };

  const placeOrder = useMutation({
    mutationFn: async (payload: FormData) => {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Checkout failed");
      return (await res.json()) as { ok: true; orderId: string };
    },
    onSuccess: () => {
      router.push("/thank-you");
    },
    onError: (err: unknown) => {
      setFormError(err instanceof Error ? err.message : "Something went wrong");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(form)) return;
    placeOrder.mutate(form);
  };

  const inputBase =
    "w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 shadow-sm";
  const ok = "border-gray-300 bg-white focus:ring-blue-500";
  const bad = "border-red-300 bg-red-50 focus:ring-red-400";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-5"
    >
      {formError && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {formError}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full name
        </label>
        <input
          value={form.name}
          onChange={handleChange("name")}
          className={`${inputBase} ${errors.name ? bad : ok}`}
          placeholder="Jane Doe"
          autoComplete="name"
          disabled={placeOrder.isPending}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          value={form.email}
          onChange={handleChange("email")}
          className={`${inputBase} ${errors.email ? bad : ok}`}
          placeholder="jane@example.com"
          autoComplete="email"
          type="email"
          disabled={placeOrder.isPending}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Shipping address
        </label>
        <textarea
          value={form.address}
          onChange={handleChange("address")}
          className={`${inputBase} ${errors.address ? bad : ok}`}
          placeholder="123 King St W, Toronto, ON"
          rows={3}
          disabled={placeOrder.isPending}
        />
        {errors.address && (
          <p className="mt-1 text-sm text-red-600">{errors.address}</p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={placeOrder.isPending}
          className="w-full rounded-full bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700 transition disabled:opacity-60"
        >
          {placeOrder.isPending ? "Placing order…" : "Continue to payment"}
        </button>
      </div>
    </form>
  );
}
