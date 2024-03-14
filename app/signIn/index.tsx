// Whole code while testIssues db is created:
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, Button, Alert } from "react-native";
import Gradient from "../../components/colors/gradient";
import { createClient } from '@supabase/supabase-js';
import { router } from "expo-router";


const supabaseUrl = 'https://cjwhychqcklykfagvlua.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqd2h5Y2hxY2tseWtmYWd2bHVhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTgwMjkzNiwiZXhwIjoyMDI1Mzc4OTM2fQ.QhYg2ixin3LnM9rkdO0U7wZ4emHy4BT-PmIz5S3LTMU';
const supabase = createClient(supabaseUrl, supabaseKey);

//If user has a registered error it will show it customed, else you have a common error text
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
        .from('profiles')
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
                Because of {userError ? userError : "an answer"} it looks like you’re not eligible to donate blood
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
// import React, { useState } from "react";
// import { View, Text, TextInput, Image, Button } from "react-native";//While not testing comment Button here and uncomment the import below 
// import Gradient from "../../components/colors/gradient";
// // import Button from "../../components/buttons/primaryButton"; 
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://lathnvpabbkjsfejvsmb.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhdGhudnBhYmJranNmZWp2c21iIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTY0MTEyMywiZXhwIjoyMDI1MjE3MTIzfQ.b2b2QuL-JDnnx-mU8fioyL9tkC6ScH8mtatqmIVg838';
// const supabase = createClient(supabaseUrl, supabaseKey);

// const SignIn = () => {
//   const [identifier, setIdentifier] = useState("");
//   const [password, setPassword] = useState("");
//   const [identifierError, setIdentifierError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const handleSignIn = async () => {
//     if (!validateIdentifier() || !validatePassword()) {
//       console.log("");
//       return;
//     }

//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email: identifier,
//         password: password,
//       })

//       if (error) {
//         console.error('Error al iniciar sesión:', error.message);
//       } else {
//         console.log('Inicio de sesión exitoso:', identifier);
//       }
//     } catch {
//       console.error('Error al iniciar sesión:',);
//     }
//   };

//   const validateIdentifier = () => {
//     if (!identifier) {
//       setIdentifierError("Email or SSC is required");
//       return false;
//     } else {
//       setIdentifierError("");
//       return true;
//     }
//   };

//   const validatePassword = () => {
//     if (!password) {
//       setPasswordError("Password is required");
//       return false;
//     } else {
//       setPasswordError("");
//       return true;
//     }
//   };
 
//   return (
//     <>
//       <Gradient>
//         <View className="h-[100%]">
//           <View className="h-[20%] mt-20 ">
//             <Image
//               source={require('../../assets/white_drop_2_2.svg')}
//               className=" w-[200px] h-[200px] ml-[9%]"
//             />
//             <Text className="text-white text-5xl font-bold mb-20">Blood Buddy</Text>
//           </View>

//           <View className="h-[80%] mt-40">
//             <Text className="text-white text-base">Email or Username</Text>
//             <TextInput
//               className=" text-base bg-white border-white rounded-md pl-2 pr-2 h-10"
//               onChangeText={setIdentifier}
//               onBlur={validateIdentifier}
//             />
//             {identifierError ? <Text style={{ color: 'red' }}>{identifierError}</Text> : null}
//             <Text className="text-white text-base mt-7">Password</Text>
//             <TextInput
//               className=" text-base bg-white border-white rounded-md pl-2 pr-2 h-10"
//               onChangeText={setPassword}
//               onBlur={validatePassword}
//               secureTextEntry={true}
//             />
//             {passwordError ? <Text style={{ color: 'red' }}>{passwordError}</Text> : null}
//             <Link href="../signUpTest/index">
//               <Text className="text-white text-base border-b-2 border-white mb-5">
//                 I forgot my password
//               </Text>
//             </Link>
//             <View className="mt-[45%]">
//               <Button title="Sign In" onPress={handleSignIn}></Button>
//             </View>
//           </View>
//         </View>
//       </Gradient>
//     </>
//   );
// };

// export default SignIn;

