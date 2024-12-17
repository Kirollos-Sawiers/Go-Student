import React, { useState } from "react";
import { useForm } from "react-hook-form";

const RegistrationFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedPeriod, setSelectedPeriod] = useState(6); // Default period is 6 months
  const [payInAdvance, setPayInAdvance] = useState(false);
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  // Pricing based on the selected period
  const pricing = {
    6: 29.6,
    9: 28.8,
    12: 27.5,
    18: 26.0,
    24: 25.0,
    36: 24.0,
  };

  // Calculations
  const basePrice = pricing[selectedPeriod];
  const discount = basePrice * 0.04; // 4% discount
  const advanceDiscount = payInAdvance ? basePrice * 0.05 : 0; // Extra 5% discount if checked
  const finalPrice = (basePrice - discount - advanceDiscount).toFixed(2);

  // Unified submission handler
  const onSubmit = (formData) => {
    const orderDetails = {
      ...formData,
      selectedPeriod: `${selectedPeriod} months`,
      payInAdvance,
      termsAndConditions,
      finalPrice: `${finalPrice}€`,
    };
    console.log("Order Submission:", orderDetails);
  };

  return (
    <div className="max-w-4xl p-4 md:p-8 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-5 md:col-span-3">
            <div className="my-5">
              <p className="w-full flex justify-center text-xl font-bold ">
                Registration & Booking at GoStudent
              </p>
              <p className="w-full flex justify-center text-lg font-light">
                The leading platform for online tutoring.
              </p>
            </div>
            {/* LOGIN PHONE NUMBER */}
            <div>
              <label className="flex text-sm font-semibold mb-1">
                <span className=" text-neutral-400 mr-2">
                  LOGIN PHONE NUMBER
                </span>
                <span>
                  (preferably{" "}
                  <span className="inline underline underline-offset-2">
                    the student's
                  </span>
                  )
                </span>
              </label>
              <input
                type="number"
                placeholder="+30"
                {...register("studentPhone", {
                  required: "Student phone number is required",
                })}
                className="w-full border rounded mb-5 p-2 focus:outline-none focus:ring focus:ring-blue-300 bg-gray-100"
              />
              {errors.studentPhone && (
                <p className="text-red-500 text-sm">
                  {errors.studentPhone.message}
                </p>
              )}
            </div>

            {/* CONTACT PHONE NUMBER */}
            <div>
              <label className="flex text-sm font-semibold mb-1">
                <span className=" text-neutral-400 mr-2">
                  {" "}
                  CONTACT PHONE NUMBER
                </span>
                <span>
                  (preferably{" "}
                  <span className="inline underline underline-offset-2">
                    the parent's
                  </span>
                  )
                </span>
              </label>
              <input
                type="number"
                placeholder="+30"
                {...register("parentPhone", {
                  required: "Parent phone number is required",
                })}
                className="w-full border rounded mb-5 p-2 focus:outline-none focus:ring focus:ring-blue-300 bg-gray-100"
              />
              {errors.parentPhone && (
                <p className="text-red-500 text-sm">
                  {errors.parentPhone.message}
                </p>
              )}
            </div>

            {/* EMAIL ADDRESS */}
            <div>
              <label className="flex text-sm font-semibold mb-1">
                <span className="text-neutral-400 mr-2">
                  CONTACT EMAIL ADDRESS
                </span>
                <span>
                  (preferably{" "}
                  <span className="underline underline-offset-2">
                    the parent's
                  </span>
                  )
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full border rounded mb-5 p-2 focus:outline-none focus:ring focus:ring-blue-300 bg-gray-100"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* CONTACT NAME */}
            <div>
              <label className="text-sm font-semibold mb-1 text-neutral-400">
                CONTACT NAME
              </label>
              <input
                type="text"
                placeholder="Enter name"
                {...register("contactName", {
                  required: "Contact name is required",
                })}
                className="w-full border rounded mb-5 p-2 focus:outline-none focus:ring focus:ring-blue-300 bg-gray-100"
              />
              {errors.contactName && (
                <p className="text-red-500 text-sm">
                  {errors.contactName.message}
                </p>
              )}
            </div>

            {/* BILLING ADDRESS */}
            <div className="text-sm font-semibold leading-none mb-1 text-neutral-400">
              BILLING ADDRESS
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  {...register("address", { required: "Address is required" })}
                  className="w-full border rounded mb-5 p-2 focus:outline-none focus:ring focus:ring-blue-300 bg-gray-100"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Nr"
                  {...register("addressNr", { required: "Number is required" })}
                  className="w-full border rounded mb-5 p-2 focus:outline-none focus:ring focus:ring-blue-300 bg-gray-100"
                />
              </div>
            </div>

            {/* Postal Code, City, Country */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Postal code"
                  {...register("postalCode", {
                    required: "Postal code is required",
                  })}
                  className="w-full border rounded mb-5 p-2 focus:outline-none focus:ring focus:ring-blue-300 bg-gray-100"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="City"
                  {...register("city", { required: "City is required" })}
                  className="w-full border rounded mb-5 p-2 focus:outline-none focus:ring focus:ring-blue-300 bg-gray-100"
                />
              </div>
              <div>
                <select
                  {...register("country", { required: "Country is required" })}
                  className="w-full border rounded mb-5 p-2 focus:outline-none focus:ring focus:ring-blue-300 text-neutral-400 bg-gray-100"
                >
                  <option value="">Country</option>
                  <option value="Greece">Greece</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* MONTHLY SESSIONS */}
            <div>
              <label className="text-sm font-semibold mb-1 text-neutral-400">
                MONTHLY SESSIONS
              </label>
              <select
                {...register("sessions")}
                className="w-full border rounded mb-5 p-2 focus:outline-none focus:ring focus:ring-blue-300 text-neutral-400 bg-gray-100"
              >
                <option value="8">8 Sessions</option>
                <option value="12">12 Sessions</option>
              </select>
            </div>

            {/* PAYMENT SECTION */}

            <label className="block text-sm font-semibold mb-1 text-neutral-400">
              SELECT PAYMENT METHOD
            </label>
            <div className="border rounded-lg p-5 m-0">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="SEPA"
                  {...register("paymentMethod", {
                    required: "Payment method is required",
                  })}
                  className="mr-2"
                />
                SEPA
              </label>
            </div>
            {/* CARD DETAILS */}
            <div className="border rounded-lg p-5">
              <div className="mb-3">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="Card"
                    {...register("paymentMethod")}
                    className="mr-2"
                  />
                  Card
                </label>
              </div>
              {errors.paymentMethod && (
                <p className="text-red-500 text-sm">
                  {errors.paymentMethod.message}
                </p>
              )}

              <div>
                <input
                  type="text"
                  placeholder="Card holder"
                  {...register("cardHolder")}
                  className="w-full border rounded p-2 mb-2 bg-gray-100"
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  {...register("cardNumber")}
                  className="w-full border rounded p-2 mb-2 bg-gray-100"
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="text-xs text-neutral-300">
                100% secure payment. All data is encrypted
              </p>
            </div>
          </div>
          <div className="col-span-5 md:col-span-2 bg-gray-100 shadow-md rounded-md p-5">
            <div className="bg-gray-100">
              <h2 className="text-lg font-bold mb-4">Order Overview</h2>

              {/* Period Selection */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                {[6, 9, 12, 18, 24, 36].map((period) => (
                  <button
                    key={period}
                    type="button"
                    onClick={() => setSelectedPeriod(period)}
                    className={`p-2 text-center text-xs font-semibold border rounded ${
                      selectedPeriod === period
                        ? "bg-blue-500 text-white"
                        : "text-neutral-300"
                    }`}
                  >
                    {period} MONTHS
                  </button>
                ))}
              </div>

              {/* Pay in Advance */}
              <div className="flex items-center space-x-2 mb-4">
                <input
                  type="checkbox"
                  id="payInAdvance"
                  checked={payInAdvance}
                  onChange={(e) => setPayInAdvance(e.target.checked)}
                  className="w-5 h-5"
                />
                <label htmlFor="payInAdvance" className="font-semibold text-xs">
                  Pay in advance - EXTRA 5% DISCOUNT
                </label>
              </div>

              {/* Pricing Details */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-400">
                    Number of Sessions P.M.
                  </span>
                  <span>8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Regular Price</span>
                  <span className="line-through text-gray-500">
                    {basePrice.toFixed(2)}€
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Your Price</span>
                  <span className="font-bold">{finalPrice}€</span>
                </div>
                <div className="flex justify-between text-green-500 font-bold">
                  <span>Discount 4%</span>
                  <span>-{discount.toFixed(2)}€</span>
                </div>
                {payInAdvance && (
                  <div className="flex justify-between text-green-500 font-bold">
                    <span>Pay in Advance Discount</span>
                    <span>-{advanceDiscount.toFixed(2)}€</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Setup Fee</span>
                  <span>0.00€</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-blue-600">
                  <span>Total P.M.</span>
                  <span>{finalPrice}€</span>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex space-x-2 my-4">
              <input
                type="checkbox"
                id="termsAndConditions"
                checked={termsAndConditions}
                onChange={(e) => setTermsAndConditions(e.target.checked)}
                className="w-5 h-5"
              />
              <label
                htmlFor="termsAndConditions"
                className="text-xs text-neutral-400"
              >
                I accept the{" "}
                <span className="text-blue-500"> Terms and Conditions</span> and
                understand my{" "}
                <span className="text-blue-500">right of withdrawal</span> as
                well as circumstances that lead to a repeal of the same.
              </label>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-purple-500 to-blue-500 font-bold text-white rounded"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationFormData;
