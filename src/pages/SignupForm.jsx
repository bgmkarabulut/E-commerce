"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

const SignupForm = () => {
  const [roles, setRoles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const selectedRole = watch("role_id");

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get("/roles");
        setRoles(response.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
        toast.error("Failed to fetch roles");
      }
    };

    fetchRoles();
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const selectedRoleCode = roles.find(
        (role) => role.id === Number(data.role_id)
      )?.code;
      const postData =
        selectedRoleCode === "store"
          ? data
          : {
              name: data.name,
              email: data.email,
              password: data.password,
              role_id: data.role_id,
            };
      await api.post("/signup", postData);
      toast.success(
        "You need to click the link in your email to activate your account!"
      );
      // Redirect to previous page
      window.history.back();
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Signup failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStoreRole =
    roles.find((role) => role.id === Number(selectedRole))?.code === "store";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md space-y-6"
    >
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
              message:
                "Password must include numbers, lowercase, uppercase, and special characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="passwordConfirmation">Confirm Password</Label>
        <Input
          id="passwordConfirmation"
          type="password"
          {...register("passwordConfirmation", {
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        {errors.passwordConfirmation && (
          <p className="text-red-500 text-sm">
            {errors.passwordConfirmation.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Controller
          name="role_id"
          control={control}
          defaultValue={
            roles.find((role) => role.code === "customer")?.id.toString() || ""
          }
          rules={{ required: "Role is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role.id} value={role.id.toString()}>
                    {role.code === "admin"
                      ? "Admin"
                      : role.code === "store"
                      ? "Store"
                      : "Customer"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.role_id && (
          <p className="text-red-500 text-sm">{errors.role_id.message}</p>
        )}
      </div>

      {isStoreRole && (
        <>
          <div className="space-y-2">
            <Label htmlFor="storeName">Store Name</Label>
            <Input
              id="storeName"
              {...register("store.name", {
                required: "Store name is required",
                minLength: {
                  value: 3,
                  message: "Store name must be at least 3 characters",
                },
              })}
            />
            {errors.store?.name && (
              <p className="text-red-500 text-sm">
                {errors.store.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="storePhone">Store Phone</Label>
            <Input
              id="storePhone"
              {...register("store.phone", {
                required: "Store phone is required",
                pattern: {
                  value: /^(\+90|0)?[1-9][0-9]{9}$/,
                  message: "Invalid Turkish phone number",
                },
              })}
            />
            {errors.store?.phone && (
              <p className="text-red-500 text-sm">
                {errors.store.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="storeTaxId">Store Tax ID</Label>
            <Input
              id="storeTaxId"
              {...register("store.tax_no", {
                required: "Store Tax ID is required",
                pattern: {
                  value: /^T\d{3}V\d{6}$/,
                  message: "Invalid Tax ID format (TXXXVXXXXXX)",
                },
              })}
            />
            {errors.store?.tax_no && (
              <p className="text-red-500 text-sm">
                {errors.store.tax_no.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="storeBankAccount">Store Bank Account (IBAN)</Label>
            <Input
              id="storeBankAccount"
              {...register("store.bank_account", {
                required: "Store Bank Account is required",
                pattern: {
                  value: /^TR\d{2}\d{5}\d{1}\d{16}$/,
                  message: "Invalid IBAN format",
                },
              })}
            />
            {errors.store?.bank_account && (
              <p className="text-red-500 text-sm">
                {errors.store.bank_account.message}
              </p>
            )}
          </div>
        </>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Sign Up"}
      </Button>

      <ToastContainer />
    </form>
  );
};

export default SignupForm;
