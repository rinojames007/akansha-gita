import React from "react";

const Resistration = () => {
  return (
    <div>
      <div className="container h-full mt-[100px] p-6 w-[90%] mx-auto border-2">
        <form action="#" className="mx-auto space-y-5">
            <div className="name flex justify-center items-center space-x-4">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="border-2 w-[80%]"
            name="name"
            placeholder="Enter your full Name..."
            required
          />
          </div>
          <div className="RollNumber flex justify-center items-center space-x-4">
          <label htmlFor="RollNumber">Roll Number:</label>
          <input
            type="text"
            name="RollNumber"
            className="border-2 w-[30%]"
            placeholder="Enter your Roll Number..."
            required
          />
          </div>
          <div className="courseInfo flex flex-col sm:flex-row justify-center items-center sm:space-x-4">
            <label htmlFor="Course">Course:</label>
            <select name="Course" id="Course" className="border-2" required>
              <option value="BTech">B-Tech</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
            </select>
            <label htmlFor="Year">Year</label>
            <select name="Year" id="Year" className="border-2" required>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">Last</option>
            </select>
            <label htmlFor="Branch">Branch:</label>
            <select name="Branch" id="Branch" className="border-2" required>
              <option value="">Branch</option>
              <option value="CSE">CSE</option>
              <option value="CSIT">CSIT</option>
              <option value="CSDS">CSDS</option>
              <option value="CSAI">CSAI</option>
              <option value="CST">CST</option>
              <option value="CIVIL">CIVIL</option>
              <option value="EEE">EEE</option>
              <option value="ECE">ECE</option>
              <option value="MECHANICAL">ME</option>
            </select>
          </div>
          <div className="gender flex flex-col sm:flex-row justify-center items-center space-x-4">
            <label htmlFor="Gender">Gender:</label>
            <input type="radio" name="Gender" value="M" required />
            <span>Male</span>
            <input type="radio" name="Gender" value="F" required />
            <span>Female</span>
          </div>
          <div className="numbers flex flex-col sm:flex-row justify-center items-center space-x-4">
            <label htmlFor="PhoneNumber">Phone Number:</label>
            <input type="tel" placeholder="0000000000" className="border-2" name="PhoneNumber" required />

            <label htmlFor="Whatsapp-Number">Whatsapp Number:</label>
            <input type="tel" placeholder="0000000000" className="border-2" name="PhoneNumber" required />
          </div>
          <div className="mail flex flex-col sm:flex-row justify-center items-center space-x-4">
          <label htmlFor="Email">Email:</label>
          <input type="email" name="Email" className="border-2" placeholder="abc@gmail.com" required />
          </div>
          <div className="stay flex flex-col sm:flex-row justify-center items-center space-x-4">
            <label htmlFor="stay">Hosteller / Day Boarder:</label>
            <input type="radio" name="Staying" value="Hosteller" required /><span>Hosteller</span>
            <input type="radio" name="Staying" value="Day Boarder" required /><span>Day Boarder</span>
          </div>
          <input type="submit" id="submit" className=" flex mx-auto px-3 bg-slate-600 py-2 rounded-lg text-white hover:scale-90 hover:delay-100" required />
        </form>
      </div>
    </div>
  );
};

export default Resistration;
