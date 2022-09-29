import { useState, useEffect } from "react";
import { BiRename } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import supabase from "../utils/supabase";
const EmergencyForm1 = ({ number }) => {
  const [name1, setName1] = useState("");
  const [email1, setEmail1] = useState("");
  const [relation1, setRelation1] = useState("");
  const [name2, setName2] = useState("");
  const [email2, setEmail2] = useState("");
  const [relation2, setRelation2] = useState("");
  const handleAdd = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("emergency_contacts").insert([
      {
        email: supabase.auth.user().email,
        emergency: [
          {
            name1: name1,
            email1: email1,
            relation1: relation1,
          },
          {
            name2: name2,
            email2: email2,
            relation2: relation2,
          },
        ],
      },
    ]);
    if (error) {
      alert(error.message);
    } else {
      alert("Emergency Contacts Added!");
    }
  };
  const getUser = async (e) => {
    try {
      const { data, error } = await supabase
        .from("emergency_contacts")
        .select("*")
        .eq("email", supabase.auth.user().email);
      if (error) {
        alert(error.message);
      } else {
        setName1(data[0].emergency[0].name1);
        setEmail1(data[0].emergency[0].email1);
        setRelation1(data[0].emergency[0].relation1);
        setName2(data[0].emergency[1].name2);
        setEmail2(data[0].emergency[1].email2);
        setRelation2(data[0].emergency[1].relation2);
      }
    } catch {
      setName1("");
      setEmail1("");
      setRelation1("");
      setName2("");
      setEmail2("");
      setRelation2("");
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="bg-gray-200 mx-2 py-12 rounded-md">
      <h1 className="text-center font-black">
        Details of Emergency Contact #{number}
      </h1>
      <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
        <div>
          <div className="relative">
            <input
              type="name"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter the name"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
            />

            <span className="absolute inset-y-0 inline-flex items-center right-4">
              <BiRename />
            </span>
          </div>
        </div>

        <div>
          <div className="relative">
            <input
              type="email"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter email"
              value={email1}
              onChange={(e) => setEmail1(e.target.value)}
            />

            <span className="absolute inset-y-0 inline-flex items-center right-4">
              <AiOutlineMail />
            </span>
          </div>
        </div>
        <div>
          <div className="relative">
            <input
              type="text"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter relation"
              value={relation1}
              onChange={(e) => setRelation1(e.target.value)}
            />

            <span className="absolute inset-y-0 inline-flex items-center right-4">
              <AiOutlineUserAdd />
            </span>
          </div>
        </div>
      </form>
      <h1 className="text-center font-black mt-12">
        Details of Emergency Contact #{number + 1}
      </h1>
      <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
        <div>
          <div className="relative">
            <input
              type="name"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter the name"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
            />

            <span className="absolute inset-y-0 inline-flex items-center right-4">
              <BiRename />
            </span>
          </div>
        </div>

        <div>
          <div className="relative">
            <input
              type="email"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter email"
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
            />

            <span className="absolute inset-y-0 inline-flex items-center right-4">
              <AiOutlineMail />
            </span>
          </div>
        </div>
        <div>
          <div className="relative">
            <input
              type="text"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter relation"
              value={relation2}
              onChange={(e) => setRelation2(e.target.value)}
            />

            <span className="absolute inset-y-0 inline-flex items-center right-4">
              <AiOutlineUserAdd />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-rose-500 hover:bg-rose-400 active:bg-rose-600 rounded-lg"
            onClick={handleAdd}
          >
            Add user
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmergencyForm1;
