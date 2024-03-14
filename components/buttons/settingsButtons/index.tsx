import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { tw } from 'react-native-tailwindcss';

interface ToggleButtonProps {
    onToggle: (newValue: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onToggle }) => {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        const newValue = !isOn;
        setIsOn(newValue);
        onToggle(newValue);
    };

    return (
        <TouchableOpacity className='w-24 h-12 relative justify-center px-2.5' onPress={toggle}>
            <View className={`absolute border-red-500 border-2 top-2.5 bottom-2.5 left-2.5 right-2.5 bg-white rounded-full ${isOn ? "bg-blood" : "bg-white"
                }`} />
            <View className={`w-7 h-7 rounded-full bg-white absolute top-2.5 right-2.5 ${isOn ? "right-auto left-2.5 bg-white" : "right-2.5"
                }`} />
            <Text className={`text-lg font-bold text-center text-black absolute top-3.5 left-0 right-0 ${isOn ? "text-white left-3.5 right-auto" : null
                }`}>{isOn ? 'ON' : 'OFF'}</Text>
        </TouchableOpacity>
    );
};

export default ToggleButton;
