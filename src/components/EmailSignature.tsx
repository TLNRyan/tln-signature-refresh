import { Phone, Globe, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import logoImageBlack from "@/assets/tln-logo.png";
import logoImageWhite from "@/assets/tln-logo-white.png";

interface EmailSignatureProps {
  name: string;
  title: string;
  phone: string;
  website: string;
  mode?: "light" | "dark";
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

const EmailSignature = ({ name, title, phone, website, mode = "light", linkedin, twitter, facebook, instagram }: EmailSignatureProps) => {
  const logoImage = mode === "dark" ? logoImageWhite : logoImageBlack;
  
  const socialLinks = [
    { url: linkedin, Icon: Linkedin, label: "LinkedIn" },
    { url: twitter, Icon: Twitter, label: "Twitter" },
    { url: facebook, Icon: Facebook, label: "Facebook" },
    { url: instagram, Icon: Instagram, label: "Instagram" },
  ].filter(link => link.url && link.url.trim() !== "");
  
  return (
    <div className="inline-block bg-card border border-border p-6 rounded-sm">
      <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif' }}>
        <tbody>
          <tr>
            <td style={{ paddingRight: '20px', verticalAlign: 'top', borderRight: '2px solid hsl(var(--tln-cadet))' }}>
              <img 
                src={logoImage} 
                alt="The Learning Network" 
                style={{ width: '120px', height: 'auto', display: 'block' }}
              />
            </td>
            <td style={{ paddingLeft: '20px', verticalAlign: 'top' }}>
              <div style={{ marginBottom: '8px' }}>
                <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: 'hsl(var(--foreground))', fontFamily: "'Outfit', sans-serif" }}>
                  {name}
                </p>
                <p style={{ margin: 0, fontSize: '13px', color: 'hsl(var(--tln-grey))', fontFamily: "'Manrope', sans-serif", letterSpacing: '0.02em' }}>
                  {title}
                </p>
              </div>
              <div style={{ marginTop: '12px' }}>
                <p style={{ margin: '4px 0', fontSize: '13px', color: 'hsl(var(--tln-cadet))', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Phone size={14} style={{ display: 'inline' }} />
                  <span>{phone}</span>
                </p>
                <p style={{ margin: '4px 0', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Globe size={14} style={{ display: 'inline', color: 'hsl(var(--tln-cadet))' }} />
                  <a 
                    href={`https://${website}`} 
                    style={{ color: 'hsl(var(--tln-blue))', textDecoration: 'none' }}
                  >
                    {website}
                  </a>
                </p>
              </div>
              {socialLinks.length > 0 && (
                <div style={{ marginTop: '12px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {socialLinks.map(({ url, Icon, label }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: 'hsl(var(--tln-cadet))',
                        transition: 'color 0.2s',
                        display: 'inline-flex',
                        alignItems: 'center'
                      }}
                      title={label}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmailSignature;
