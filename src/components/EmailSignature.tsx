import { Linkedin } from "lucide-react";
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
    <div className="inline-block bg-white p-6">
      <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif' }}>
        <tbody>
          <tr>
            <td style={{ paddingRight: '16px', verticalAlign: 'top', borderRight: '1px solid #d1d5db' }}>
              <img 
                src={logoImage} 
                alt="The Learning Network" 
                style={{ width: '100px', height: 'auto', display: 'block' }}
              />
            </td>
            <td style={{ paddingLeft: '16px', verticalAlign: 'top' }}>
              <div>
                <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#000000', fontFamily: 'Arial, sans-serif', lineHeight: '1.4' }}>
                  {name}
                </p>
                <p style={{ margin: '2px 0 0 0', fontSize: '13px', color: '#6a6b68', fontFamily: 'Arial, sans-serif', lineHeight: '1.4' }}>
                  {title}
                </p>
                <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#5f9ea0', fontFamily: 'Arial, sans-serif', lineHeight: '1.4' }}>
                  {phone}
                </p>
                <p style={{ margin: '2px 0 0 0', fontSize: '13px', fontFamily: 'Arial, sans-serif', lineHeight: '1.4' }}>
                  <a 
                    href={`https://${website}`} 
                    style={{ color: '#5f9ea0', textDecoration: 'none' }}
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
                      color: '#5f9ea0',
                      transition: 'color 0.2s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      textDecoration: 'none'
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
