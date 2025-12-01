import { useState } from "react";
import EmailSignature from "@/components/EmailSignature";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [name, setName] = useState("Susan Grandy");
  const [title, setTitle] = useState("Senior Software Engineer");
  const [phone, setPhone] = useState("902.441.3779");
  const [website, setWebsite] = useState("www.learning.net");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const generateHTML = () => {
    return `<table cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;">
  <tbody>
    <tr>
      <td style="padding-right: 20px; vertical-align: top; border-right: 2px solid #5f9ea0;">
        <img src="YOUR_LOGO_URL_HERE" alt="The Learning Network" style="width: 120px; height: auto; display: block;" />
      </td>
      <td style="padding-left: 20px; vertical-align: top;">
        <div style="margin-bottom: 8px;">
          <p style="margin: 0; font-size: 16px; font-weight: bold; color: #000000; font-family: 'Outfit', sans-serif;">
            ${name}
          </p>
          <p style="margin: 0; font-size: 13px; color: #6a6b68; font-family: 'Manrope', sans-serif; letter-spacing: 0.02em;">
            ${title}
          </p>
        </div>
        <div style="margin-top: 12px;">
          <p style="margin: 4px 0; font-size: 13px; color: #5f9ea0;">
            📞 ${phone}
          </p>
          <p style="margin: 4px 0; font-size: 13px;">
            🌐 <a href="https://${website}" style="color: #6a8ba2; text-decoration: none;">${website}</a>
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>`;
  };

  const copyToClipboard = () => {
    const html = generateHTML();
    navigator.clipboard.writeText(html).then(() => {
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Email signature HTML copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-outfit font-bold text-foreground mb-3">
            Email Signature Generator
          </h1>
          <p className="text-lg text-muted-foreground font-manrope">
            The Learning Network
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-outfit">Customize Your Signature</CardTitle>
              <CardDescription className="font-manrope">
                Enter your details below to generate your email signature
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-manrope">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="font-manrope"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title" className="font-manrope">Job Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="font-manrope"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-manrope">Phone Number</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="font-manrope"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website" className="font-manrope">Website</Label>
                <Input
                  id="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="font-manrope"
                />
              </div>
              <Button 
                onClick={copyToClipboard} 
                className="w-full font-manrope"
                variant="default"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy HTML Code
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="font-outfit">Preview</CardTitle>
              <CardDescription className="font-manrope">
                This is how your signature will appear
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-start justify-center min-h-[300px]">
              <EmailSignature
                name={name}
                title={title}
                phone={phone}
                website={website}
              />
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="font-outfit">How to Use</CardTitle>
          </CardHeader>
          <CardContent className="font-manrope text-muted-foreground space-y-3">
            <ol className="list-decimal list-inside space-y-2">
              <li>Customize your details in the form above</li>
              <li>Click "Copy HTML Code" to copy the signature HTML</li>
              <li>Open your email client settings (Gmail, Outlook, etc.)</li>
              <li>Navigate to the signature section</li>
              <li>Paste the HTML code (you may need to paste into the HTML editor mode)</li>
              <li>Replace "YOUR_LOGO_URL_HERE" with the actual hosted logo URL</li>
              <li>Save your signature</li>
            </ol>
            <p className="text-sm mt-4 pt-4 border-t border-border">
              <strong>Note:</strong> You'll need to host the logo image online and replace the placeholder URL in the HTML code with your actual logo URL.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
