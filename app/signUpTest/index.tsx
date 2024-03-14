import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import TestedButtons from "../../components/buttons/letsGetTestedButtons";
import PrimaryButton from "../../components/buttons/primaryButton";
import Gradient from "../../components/colors/gradient";
import { testQuestions } from "../../utils/questions";
import { Link } from "expo-router";

interface Answer {
  index: number;
  answer: boolean;
}

const SignUpTest = () => {
  const [answers, setAnswers] = useState<Array<boolean | null>>(Array(testQuestions.length).fill(null));
  const [correctForm, setCorrectForm] = useState<boolean>(false);

  const handleAnswer = ({ index, answer }: Answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  useEffect(() => {
    setCorrectForm(isAllAnswersCorrect());
  }, [answers])

  const isAllAnswersCorrect = () => {
    const correct = answers.every((answer, index) =>
      answer === testQuestions[index].correctAnswer && answer !== null
    );
    return correct;
  };

  return (
    <Gradient>
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: "center" }}>
        <View className="h-[20%] mt-[10%] items-center">
          <Text className="text-4xl font-bold text-white">Let’s get tested!</Text>
          <Text className="mt-10 text-2xl text-white">Take the test below to see if you’re eligible for blood donation</Text>
        </View>
        {testQuestions.map((questionObj, index) => (
          <View key={index} className="flex-col items-center p-0 mb-20 max-w-[85%]">
            <Text className="text-white mb-5">{questionObj.question}</Text>
            <View className="flex-row justify-between w-[212px]">
              <TestedButtons title="Yes" handleClick={() => handleAnswer({ index, answer: true })} />
              <TestedButtons title="No" handleClick={() => handleAnswer({ index, answer: false })} />
            </View>
          </View>
        ))}
        <View className="h-[10%]">
          <Link href={correctForm ? "/signUp" : "/notEligible"}>
            <PrimaryButton isPrimary={false} title="Finish Test" />
          </Link>
        </View>
      </ScrollView>
    </Gradient>
  );
};

export default SignUpTest;
