import { useState } from "react";
import SignaturePreview from "@/components/SignaturePreview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "next-themes";

const Index = () => {
  const [name, setName] = useState("Susan Grandy");
  const [title, setTitle] = useState("Senior Software Engineer");
  const [phone, setPhone] = useState("902.441.3779");
  const [linkedin, setLinkedin] = useState("");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const { theme, systemTheme } = useTheme();
  
  const website = "www.learning.net"; // Fixed company website
  
  // Determine the active theme based on browser preference
  const activeTheme = theme === "system" ? systemTheme : theme;
  const browserMode = activeTheme === "dark" ? "dark" : "light";

  const generateHTML = () => {
    const linkedinHTML = linkedin && linkedin.trim() !== "" ? `
        <div style="margin-top: 12px;">
          <a href="${linkedin}" target="_blank" rel="noopener noreferrer" style="color: #5f9ea0; text-decoration: none; font-size: 13px; display: inline-flex; align-items: center; gap: 6px;" title="LinkedIn">
            <span>🔗</span>
            <span>LinkedIn</span>
          </a>
        </div>` : '';

    return `<div style="display: inline-block; padding: 24px; background-color: #ffffff;">
  <style>
    @media (prefers-color-scheme: dark) {
      .email-signature-wrapper { background-color: #000000 !important; }
      .signature-name { color: #ffffff !important; }
      .signature-separator { border-color: #d1d5db !important; }
    }
  </style>
  <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;" class="email-signature-wrapper">
    <tbody>
      <tr>
        <td style="padding-right: 16px; vertical-align: top; border-right: 1px solid #d1d5db;" class="signature-separator">
          <picture>
            <source srcset="YOUR_DARK_LOGO_URL_HERE" media="(prefers-color-scheme: dark)">
            <img src="YOUR_LIGHT_LOGO_URL_HERE" alt="The Learning Network" style="width: 140px; height: auto; display: block;" />
          </picture>
        </td>
        <td style="padding-left: 16px; vertical-align: top;">
          <div>
            <p style="margin: 0; font-size: 16px; font-weight: bold; color: #000000; font-family: Arial, sans-serif; line-height: 1.4;" class="signature-name">
              ${name}
            </p>
            <p style="margin: 2px 0 0 0; font-size: 13px; color: #6a6b68; font-family: Arial, sans-serif; line-height: 1.4;">
              ${title}
            </p>
            <p style="margin: 8px 0 0 0; font-size: 13px; color: #5f9ea0; font-family: Arial, sans-serif; line-height: 1.4; display: flex; align-items: center; gap: 6px;">
              <span>📞</span>
              <span>${phone}</span>
            </p>
            <p style="margin: 2px 0 0 0; font-size: 13px; font-family: Arial, sans-serif; line-height: 1.4; display: flex; align-items: center; gap: 6px;">
              <span>🌐</span>
              <a href="https://${website}" style="color: #5f9ea0; text-decoration: none;">${website}</a>
            </p>
          </div>${linkedinHTML}
        </td>
      </tr>
    </tbody>
  </table>
</div>`;
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

  const downloadHTML = () => {
    const html = generateHTML();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'email-signature.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: "Email signature HTML file downloaded",
    });
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-end mb-4">
            <ThemeToggle />
          </div>
          <h1 className="text-4xl font-outfit font-bold text-foreground mb-3">
            Email Signature Generator
          </h1>
          <p className="text-lg text-muted-foreground font-manrope">
            The Learning Network
          </p>
        </header>

        {/* Input Form */}
        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="font-outfit">Customize Your Signature</CardTitle>
            <CardDescription className="font-manrope">
              Enter your details below to generate your email signature
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
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
                <Label htmlFor="linkedin" className="font-manrope">LinkedIn Profile URL</Label>
                <Input
                  id="linkedin"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="font-manrope"
                />
                <p className="text-xs text-muted-foreground font-manrope">Leave blank if you do not want to add this</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
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
              <Button 
                onClick={downloadHTML} 
                className="w-full font-manrope"
                variant="outline"
              >
                <Download className="mr-2 h-4 w-4" />
                Download HTML File
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Browser Theme Preview */}
        <div className="mb-8">
          <h2 className="text-2xl font-outfit font-bold text-center mb-2">
            Your Signature
          </h2>
          <p className="text-center text-muted-foreground font-manrope mb-6">
            This preview matches your browser's {browserMode} theme
          </p>
          <div className="flex justify-center">
            <SignaturePreview
              name={name}
              title={title}
              phone={phone}
              website={website}
              mode={browserMode}
              linkedin={linkedin}
            />
          </div>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="mb-8">
          <h2 className="text-2xl font-outfit font-bold text-center mb-6">
            Theme Comparison
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SignaturePreview
              name={name}
              title={title}
              phone={phone}
              website={website}
              mode="light"
              linkedin={linkedin}
            />
            <SignaturePreview
              name={name}
              title={title}
              phone={phone}
              website={website}
              mode="dark"
              linkedin={linkedin}
            />
          </div>
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
              <li>Replace "YOUR_LIGHT_LOGO_URL_HERE" with your hosted black logo URL</li>
              <li>Replace "YOUR_DARK_LOGO_URL_HERE" with your hosted white logo URL</li>
              <li>Save your signature</li>
            </ol>
            <p className="text-sm mt-4 pt-4 border-t border-border">
              <strong>Note:</strong> You'll need to host both logo images (black for light mode, white for dark mode) online and replace the placeholder URLs in the HTML code. The signature will automatically adapt to your recipient's email client theme.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
