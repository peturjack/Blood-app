import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, Button, Alert } from "react-native";
import Gradient from "../../components/colors/gradient";
import { createClient } from '@supabase/supabase-js';

const NotEligible = () => {
  //Final version below uncomment while user signUpTest posts to the db
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
                Because of your choices it looks like you’re not eligible to donate blood
              </Text>
              <View className="mt-20">
                <Link href="../signUpTest/index" className=" mt-10">
                  <Text className="text-white text-[23px] mb-3">Answered wrong on the test?</Text>
                  <br />
                  <Text className="text-white font-bold text-[25px] border-b-2 border-white mb-3 ml-5">
                    Change your answer
                  </Text>
                </Link>
              </View>
            </View>
          </View>
        </View>
      </Gradient>
    </>
  );

};

export default NotEligible;




// Whole code while testIssues db is created:
// import { Link } from "expo-router";
// import React, { useEffect, useState } from "react";
// import { View, Text, TextInput, Image, Button, Alert } from "react-native";
// import Gradient from "../../components/colors/gradient";
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://lathnvpabbkjsfejvsmb.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhdGhudnBhYmJranNmZWp2c21iIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTY0MTEyMywiZXhwIjoyMDI1MjE3MTIzfQ.b2b2QuL-JDnnx-mU8fioyL9tkC6ScH8mtatqmIVg838';
// const supabase = createClient(supabaseUrl, supabaseKey);

// const NotEligible = () => {

//   // Waitting to post form errors on db to use commented code:
//     const [userError, setUserError] = useState("");

//     useEffect(() => {
//       getUserError();
//       console.log("getUserError: " + getUserError().toString);
//     }, []);

//     const getUserError = async () => {
//       try {
//         var userId = 1;// Here comes actual user id, you should swap it with a local variable stored while logging in
//         const { data, error } = await supabase
//           .from('userdata')
//           .select('userError')
//           .eq('id', userId);

//         if (error) {
//           console.error("Error getting user data:", error.message);
//         } else {
//           if (data && data.length > 0) {
//             setUserError(data[0].userError);
//           } else {
//             console.error("No errors found");
//           }
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };


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
//                 Because of {userError ? userError : "an error"} it looks like you’re not eligible to donate blood
//               </Text>
//               <Link href="../signUpTest/index" className=" mt-10">
//                 <Text className="text-white text-[23px] mb-3">Answered wrong on the test?</Text>
//                 <br/>
//                 <Text className="text-white font-bold text-[25px] border-b-2 border-white mb-3 ml-5">
//                   Change your answer
//                 </Text>
//               </Link>
//             </View>
//           </View>
//         </View>
//       </Gradient>
//     </>
//   );

// };

// export default NotEligible;