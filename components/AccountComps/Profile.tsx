import React from "react";
import CustomInput from "../ui/custom-input";

const Profile = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl">Personal Information</h3>
        <p className="text-xs tracking-wide font-light text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iure.
        </p>
      </div>
      <div>
        <form>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <CustomInput name="firstName" placeholder="First Name" required />
              <CustomInput name="lastName" placeholder="Last Name" required />
            </div>
            <CustomInput name="email" placeholder="Email" required />
            <CustomInput name="phone" placeholder="Phone" required />
            <button className="bg-templateBrown flex items-center justify-center text-white w-full py-2.5 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
      <hr />
      <div>
        <h3 className="text-xl">Update Password</h3>
        <p className="text-xs tracking-wide font-light text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iure.
        </p>
      </div>
      <div>
        <form>
          <div className="space-y-4">
            <CustomInput
              name="newPassword"
              placeholder="New Password"
              required
            />
            <CustomInput
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />
            <button className="bg-templateBrown flex items-center justify-center text-white w-full py-2.5 rounded-md">
              Update password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
