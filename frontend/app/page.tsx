"use client"
import HomeScreen from "@/components/screens/home";
import DashboardLayout from "@/components/templates/dashboard_layout";


export default function Home() {
  return (
    <DashboardLayout>
      <HomeScreen />
    </DashboardLayout>
  );
}
