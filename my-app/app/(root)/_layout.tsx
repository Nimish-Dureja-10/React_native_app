import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function AppLayout() {
    const {loading, isLoggedIn} = useGlobalContext();

    if(loading) {
        return (
            <SafeAreaProvider className="h-full bg-white flex items-center justify-center">
                <ActivityIndicator className="text-primary-300" size={'large'} />
            </SafeAreaProvider>
        )
    }
    if(!isLoggedIn) return <Redirect href={"/sign-in"} />

    return <Slot />
}