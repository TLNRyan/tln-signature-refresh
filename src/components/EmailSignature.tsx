import { Phone, Globe, Linkedin } from "lucide-react";
import logoImageBlack from "@/assets/tln-logo.png";
import logoImageWhite from "@/assets/tln-logo-white.png";

interface EmailSignatureProps {
  name: string;
  title: string;
  phone: string;
  website: string;
  mode?: "light" | "dark";
  linkedin?: string;
}

const EmailSignature = ({ name, title, phone, website, mode = "light", linkedin }: EmailSignatureProps) => {
  const logoImage = mode === "dark" ? logoImageWhite : logoImageBlack;
  
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
              {linkedin && linkedin.trim() !== "" && (
                <div style={{ marginTop: '12px' }}>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: 'hsl(var(--tln-cadet))',
                      transition: 'color 0.2s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px'
                    }}
                    title="LinkedIn"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
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
