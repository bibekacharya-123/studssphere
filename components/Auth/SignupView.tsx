import React, { useState, useEffect } from "react";

interface SignupViewProps {
  onSwitch: () => void;
  onSignup: (data: any) => void;
  onForgotPassword: () => void;
}

const SignupView: React.FC<SignupViewProps> = ({
  onSwitch,
  onSignup,
  onForgotPassword,
}) => {
  const [formData, setFormData] = useState({
    userType: "",
    subCategory: "",
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    upper: false,
    number: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (id === "password") {
      setPasswordCriteria({
        length: value.length >= 8,
        upper: /[A-Z]/.test(value),
        number: /[0-9]/.test(value),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !passwordCriteria.length ||
      !passwordCriteria.upper ||
      !passwordCriteria.number
    )
      return alert("Please meet all password requirements");
    onSignup(formData);
  };

  return (
    <div className="animate-fadeInUp">
      <div className="flex items-center gap-2 text-2xl font-bold text-blue-600 mb-0 mt-4">
        <i className="fa-solid fa-layer-group"></i>
        <span>StudSphere</span>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-[5px]">
          Create Account
        </h1>
        <p className="text-slate-500 font-medium">
          Already have an account?{" "}
          <button
            onClick={onSwitch}
            className="text-blue-600 font-bold hover:underline"
          >
            Log In
          </button>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
              I am a
            </label>
            <select
              id="userType"
              required
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none font-medium text-slate-900 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%232563EB%22%20stroke-width%3D%222%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M19%209l-7%207-7-7%22%20%2F%3E%3C%2Fsvg%3E')] bg-[length:1em] bg-[right_1rem_center] bg-no-repeat"
              value={formData.userType}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select role
              </option>
              <option value="student">Student</option>
              <option value="job_seeker">Job Seeker</option>
            </select>
          </div>

          <div
            className={`col-span-2 sm:col-span-1 transition-all ${formData.userType ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
          >
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
              {formData.userType === "student"
                ? "Education Level"
                : "Experience"}
            </label>
            <select
              id="subCategory"
              required={!!formData.userType}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none font-medium text-slate-900 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%232563EB%22%20stroke-width%3D%222%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M19%209l-7%207-7-7%22%20%2F%3E%3C%2Fsvg%3E')] bg-[length:1em] bg-[right_1rem_center] bg-no-repeat"
              value={formData.subCategory}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select option
              </option>
              {formData.userType === "student" ? (
                <>
                  <option value="+2">+2 / High School</option>
                  <option value="bachelors">Bachelor's</option>
                  <option value="masters">Master's</option>
                </>
              ) : (
                <>
                  <option value="fresher">Fresher</option>
                  <option value="experienced">Experienced</option>
                </>
              )}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Jagdis Dhami"
            required
            className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none font-medium text-slate-900"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@mail.com"
            required
            className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none font-medium text-slate-900"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Create a strong password"
              required
              className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none font-medium text-slate-900 pr-12"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
            >
              <i
                className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              ></i>
            </button>
          </div>

          <div className="flex justify-end mt-1.5">
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-[10px] font-bold text-blue-600 hover:underline uppercase tracking-wide"
            >
              Forgot Password?
            </button>
          </div>

          <div className="mt-3 space-y-1">
            {!passwordCriteria.length && (
              <Criteria
                text="At least 8 characters"
                valid={passwordCriteria.length}
              />
            )}
            {!passwordCriteria.upper && (
              <Criteria
                text="At least one uppercase"
                valid={passwordCriteria.upper}
              />
            )}
            {!passwordCriteria.number && (
              <Criteria
                text="At least one number"
                valid={passwordCriteria.number}
              />
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-xl shadow-blue-500/20 transition-all active:scale-[0.98] mt-4"
        >
          Create Account
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center text-xs font-bold uppercase tracking-widest mt-8">
            <span className="bg-white px-4 text-slate-400">or join with</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <SocialBtn isGoogle label="Google" />
        </div>
      </form>
    </div>
  );
};

const Criteria: React.FC<{ text: string; valid: boolean }> = ({
  text,
  valid,
}) => (
  <div
    className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide transition-colors ${valid ? "text-green-600" : "text-slate-400"}`}
  >
    <i
      className={`fa-solid ${valid ? "fa-circle-check" : "fa-circle-info"}`}
    ></i>{" "}
    {text}
  </div>
);

const SocialBtn: React.FC<{
  icon?: string;
  label: string;
  isGoogle?: boolean;
}> = ({ icon, label, isGoogle }) => (
  <button
    type="button"
    className="flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-bold text-sm text-slate-700"
  >
    {isGoogle ? (
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        className="w-5 h-5"
        alt="Google"
      />
    ) : (
      <i className={`fa-brands ${icon} text-lg`}></i>
    )}{" "}
    {label}
  </button>
);

export default SignupView;
