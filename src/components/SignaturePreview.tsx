import EmailSignature from "@/components/EmailSignature";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Moon, Sun } from "lucide-react";

interface SignaturePreviewProps {
  name: string;
  title: string;
  phone: string;
  website: string;
  mode: "light" | "dark";
}

const SignaturePreview = ({ name, title, phone, website, mode }: SignaturePreviewProps) => {
  return (
    <Card className={mode === "dark" ? "dark" : ""}>
      <CardHeader>
        <CardTitle className="font-outfit flex items-center gap-2">
          {mode === "dark" ? (
            <>
              <Moon className="h-5 w-5" />
              Dark Mode
            </>
          ) : (
            <>
              <Sun className="h-5 w-5" />
              Light Mode
            </>
          )}
        </CardTitle>
        <CardDescription className="font-manrope">
          {mode === "dark" 
            ? "Preview in dark email clients" 
            : "Preview in light email clients"}
        </CardDescription>
      </CardHeader>
      <CardContent 
        className={`flex items-start justify-center min-h-[280px] p-8 rounded-b-lg transition-colors ${
          mode === "dark" 
            ? "bg-[hsl(0_0%_0%)]" 
            : "bg-[hsl(42_12%_95%)]"
        }`}
      >
        <EmailSignature
          name={name}
          title={title}
          phone={phone}
          website={website}
          mode={mode}
        />
      </CardContent>
    </Card>
  );
};

export default SignaturePreview;
