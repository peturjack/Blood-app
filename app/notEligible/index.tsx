// Whole code while testIssues db is created:
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, Button, Alert } from "react-native";
import Gradient from "../../components/colors/gradient";
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://lathnvpabbkjsfejvsmb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhdGhudnBhYmJranNmZWp2c21iIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTY0MTEyMywiZXhwIjoyMDI1MjE3MTIzfQ.b2b2QuL-JDnnx-mU8fioyL9tkC6ScH8mtatqmIVg838';
const supabase = createClient(supabaseUrl, supabaseKey);

const NotEligible = () => {

  // Waitting to post form errors on db to use commented code:
  const [userError, setUserError] = useState("");

  useEffect(() => {
    userStatus();
    getUserError();
    console.log("getUserError: " + getUserError().toString);
  }, []);


 
  const userStatus = async () => {
    // Test if user is logged in
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        if (session) {
          const currentUser = session.user;
          const userId = currentUser.id;
          console.log("user id:", userId);
        } else {
          console.log("Couldn't get user data.");
        }
      } else if (event === 'SIGNED_OUT') {
        // session closed
        console.log("User disconnected");
      }
    });
    
    //get user data
    const{ data: { user } } = await supabase.auth.getUser();

    // Check if user is already logged in
    const currentUser = { user }.user?.id;
  if (currentUser) {
    const userId = { user }.user?.id;
    console.log("ID del usuario actual:", userId);
  } else {
    console.log("No hay usuario autenticado");
  }
  };
  

  //get user error
  const getUserError = async () => {
    try {
      var userId =  userStatus();// Here comes actual user id, you should swap it with a local variable stored while logging in
      const { data, error } = await supabase
        .from('userdata')
        .select('testIssues')
        .eq('id', userId);

      if (error) {
        console.error("Error getting user data:", error.message);
      } else {
        if (data && data.length > 0) {
          setUserError(data[0].testIssues);
        } else {
          console.error("No errors found");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Gradient>
        <View className="h-screen flex items-center">
          <View className="w-4/5 max-w-lg mt-20 text-center">
            <Image
              source={require('../../assets/white_confused_5.svg')}
              className="w-52 h-52 mx-auto"
            />
            <Text className="text-white text-5xl font-bold mb-10">We’re bloody sorry...</Text>
            <View className=" ml-5 mr-5">
              <Text className="text-white text-4xl font-thin mb-10">
                Because of {userError ? userError : "an error"} it looks like you’re not eligible to donate blood
              </Text>
              <Link href="/signUpTest" className=" mt-10">
                <Text className="text-white text-[23px] mb-3">Answered wrong on the test?</Text>
                <br />
                <Text className="text-white font-bold text-[25px] border-b-2 border-white mb-3 ml-5">
                  Change your answer
                </Text>
              </Link>
            </View>
          </View>
        </View>
      </Gradient>
    </>
  );

};

export default NotEligible;


// import { Link } from "expo-router";
// import React, { useEffect, useState } from "react";
// import { View, Text, TextInput, Image, Button, Alert } from "react-native";
// import Gradient from "../../components/colors/gradient";
// import { createClient } from '@supabase/supabase-js';

// const NotEligible = () => {
//   //Final version below uncomment while user signUpTest posts to the db
//   return (
//     <>
//       <Gradient>
//         <View className="h-screen flex items-center">
//           <View className="w-4/5 max-w-lg mt-20 text-center">
//             <Image
//               source={require('../../assets/white_confused_5.svg')}
//               className="w-52 h-52 mx-auto"
//             />
//             <Text className="text-white text-5xl font-bold mb-10">We’re bloody sorry...</Text>
//             <View className=" ml-5 mr-5">
//               <Text className="text-white text-4xl font-thin mb-10">
//                 Because of your choices it looks like you’re not eligible to donate blood
//               </Text>
//               <View className="mt-20">
//                 <Link href="../signUpTest/index" className=" mt-10">
//                   <Text className="text-white text-[23px] mb-3">Answered wrong on the test?</Text>
//                   <br />
//                   <Text className="text-white font-bold text-[25px] border-b-2 border-white mb-3 ml-5">
//                     Change your answer
//                   </Text>
//                 </Link>
//               </View>
//             </View>
//           </View>
//         </View>
//       </Gradient>
//     </>
//   );

// };

// export default NotEligible;