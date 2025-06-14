// components/UserForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, type userSchema as UserSchema } from "../../Shcemas/userSchema";
import { useState } from "react";

export default function UserForm() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserSchema) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phone", data.phone);
    formData.append("image", data.image);

    console.log("Submitted FormData:", data);
    // send with fetch or axios
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file, { shouldValidate: true });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 border border-gray-300 rounded-md shadow-md bg-white space-y-4"
    >
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block font-medium mb-1">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          placeholder="Your name"
          className="w-full border p-2 rounded"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block font-medium mb-1">
          Email
        </label>
        <input
          {...register("email")}
          id="email"
          placeholder="Email address"
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="block font-medium mb-1">
          Password
        </label>
        <input
          {...register("password")}
          id="password"
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block font-medium mb-1">
          Phone
        </label>
        <input
          {...register("phone")}
          id="phone"
          placeholder="+8801XXXXXXXXX"
          className="w-full border p-2 rounded"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      {/* Image Upload */}
      <div>
        <label htmlFor="image" className="block font-medium mb-1">
          Upload Image
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border p-2 rounded"
        />
        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
      </div>

      {/* Image Preview */}
      {imagePreview && (
        <div>
          <p className="font-medium mb-1">Image Preview:</p>
          <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded border" />
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
