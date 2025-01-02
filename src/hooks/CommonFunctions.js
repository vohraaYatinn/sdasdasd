const currentDate = new Date();
const apiKeyEmail = process.env.NEXT_PUBLIC_EMAIL_API_KEY;
const formattedDate = currentDate.toLocaleString(); 
import { test_url } from '@/config/environment';
import axios from 'axios';

export const sendEmail = async (name, email, phone, service, message) => {
    const apiKey = apiKeyEmail
    const apiUrl = "https://api.brevo.com/v3/smtp/email";
  
    // Prepare email data
    const emailData = {
      to: [{ email: "holidays@atstourstravels.com" }], // Replace with the recipient's email address
      subject : `ATS new Leads - ${formattedDate}`,
      textContent: "This is the plain text content of your email.",
      htmlContent: `
        <div style=" line-height: 1.6; color: #fff; padding: 20px; background-color: #006370; border-radius: 10px;">
          <h1 style="color: #fff; font-size: 24px; text-align: center;">New Lead Details</h1>
          </div>
          <p style="margin: 8px 0; font-size:20px ; "><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0;  font-size:20px ; "><strong>Email:</strong> ${email}</p>
          <p style="margin: 8px 0;  font-size:20px ; "><strong>Phone:</strong> ${phone}</p>
          <p style="margin: 8px 0;  font-size:20px ; "><strong>Service:</strong> ${service}</p>
          <p style="margin: 8px 0;  font-size:20px ; "><strong>Message:</strong> ${message}</p>
      `,
      sender: { email: "holidays@atstourstravels.com", name: "ATS" },
    };
    
  
    try {
      const response = await axios.post(apiUrl, emailData, {
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
        },
      });
  
      console.log("Email sent successfully:", response.data);
      setErrors({});
    } catch (error) {
      console.error("Error sending email:", error);
      // setShowErrorMessage("Failed to send email. Please try again.");
    }
  };

  export const countryCodes = [
    { code: "+1", label: "USA/Canada (+1)" },
    { code: "+7", label: "Russia (+7)" },
    { code: "+20", label: "Egypt (+20)" },
    { code: "+27", label: "South Africa (+27)" },
    { code: "+30", label: "Greece (+30)" },
    { code: "+31", label: "Netherlands (+31)" },
    { code: "+32", label: "Belgium (+32)" },
    { code: "+33", label: "France (+33)" },
    { code: "+34", label: "Spain (+34)" },
    { code: "+36", label: "Hungary (+36)" },
    { code: "+39", label: "Italy (+39)" },
    { code: "+40", label: "Romania (+40)" },
    { code: "+41", label: "Switzerland (+41)" },
    { code: "+44", label: "United Kingdom (+44)" },
    { code: "+45", label: "Denmark (+45)" },
    { code: "+46", label: "Sweden (+46)" },
    { code: "+47", label: "Norway (+47)" },
    { code: "+48", label: "Poland (+48)" },
    { code: "+49", label: "Germany (+49)" },
    { code: "+51", label: "Peru (+51)" },
    { code: "+52", label: "Mexico (+52)" },
    { code: "+53", label: "Cuba (+53)" },
    { code: "+54", label: "Argentina (+54)" },
    { code: "+55", label: "Brazil (+55)" },
    { code: "+56", label: "Chile (+56)" },
    { code: "+57", label: "Colombia (+57)" },
    { code: "+58", label: "Venezuela (+58)" },
    { code: "+60", label: "Malaysia (+60)" },
    { code: "+61", label: "Australia (+61)" },
    { code: "+62", label: "Indonesia (+62)" },
    { code: "+63", label: "Philippines (+63)" },
    { code: "+64", label: "New Zealand (+64)" },
    { code: "+65", label: "Singapore (+65)" },
    { code: "+66", label: "Thailand (+66)" },
    { code: "+81", label: "Japan (+81)" },
    { code: "+82", label: "South Korea (+82)" },
    { code: "+84", label: "Vietnam (+84)" },
    { code: "+86", label: "China (+86)" },
    { code: "+90", label: "Turkey (+90)" },
    { code: "+91", label: "India (+91)" },
    { code: "+92", label: "Pakistan (+92)" },
    { code: "+93", label: "Afghanistan (+93)" },
    { code: "+94", label: "Sri Lanka (+94)" },
    { code: "+95", label: "Myanmar (+95)" },
    { code: "+98", label: "Iran (+98)" },
    { code: "+211", label: "South Sudan (+211)" },
    { code: "+212", label: "Morocco (+212)" },
    { code: "+213", label: "Algeria (+213)" },
    { code: "+216", label: "Tunisia (+216)" },
    { code: "+218", label: "Libya (+218)" },
    { code: "+220", label: "Gambia (+220)" },
    { code: "+221", label: "Senegal (+221)" },
    { code: "+222", label: "Mauritania (+222)" },
    { code: "+223", label: "Mali (+223)" },
    { code: "+224", label: "Guinea (+224)" },
    { code: "+225", label: "Ivory Coast (+225)" },
    { code: "+226", label: "Burkina Faso (+226)" },
    { code: "+227", label: "Niger (+227)" },
    { code: "+228", label: "Togo (+228)" },
    { code: "+229", label: "Benin (+229)" },
    { code: "+230", label: "Mauritius (+230)" },
    { code: "+231", label: "Liberia (+231)" },
    { code: "+232", label: "Sierra Leone (+232)" },
    { code: "+233", label: "Ghana (+233)" },
    { code: "+234", label: "Nigeria (+234)" },
    { code: "+235", label: "Chad (+235)" },
    { code: "+236", label: "Central African Republic (+236)" },
    { code: "+237", label: "Cameroon (+237)" },
    { code: "+238", label: "Cape Verde (+238)" },
    { code: "+239", label: "Sao Tome and Principe (+239)" },
    { code: "+240", label: "Equatorial Guinea (+240)" },
    { code: "+241", label: "Gabon (+241)" },
    { code: "+242", label: "Congo (+242)" },
    { code: "+243", label: "Congo (Democratic Republic) (+243)" },
    { code: "+244", label: "Angola (+244)" },
    { code: "+245", label: "Guinea-Bissau (+245)" },
    { code: "+246", label: "Diego Garcia (+246)" },
    { code: "+248", label: "Seychelles (+248)" },
    { code: "+249", label: "Sudan (+249)" },
    { code: "+250", label: "Rwanda (+250)" },
    { code: "+251", label: "Ethiopia (+251)" },
    { code: "+252", label: "Somalia (+252)" },
    { code: "+253", label: "Djibouti (+253)" },
    { code: "+254", label: "Kenya (+254)" },
    { code: "+255", label: "Tanzania (+255)" },
    { code: "+256", label: "Uganda (+256)" },
    { code: "+257", label: "Burundi (+257)" },
    { code: "+258", label: "Mozambique (+258)" },
    { code: "+260", label: "Zambia (+260)" },
    { code: "+261", label: "Madagascar (+261)" },
    { code: "+262", label: "Reunion (+262)" },
    { code: "+263", label: "Zimbabwe (+263)" },
    { code: "+264", label: "Namibia (+264)" },
    { code: "+265", label: "Malawi (+265)" },
    { code: "+266", label: "Lesotho (+266)" },
    { code: "+267", label: "Botswana (+267)" },
    { code: "+268", label: "Eswatini (+268)" },
    { code: "+269", label: "Comoros (+269)" },
    { code: "+290", label: "Saint Helena (+290)" },
    { code: "+291", label: "Eritrea (+291)" },
    { code: "+297", label: "Aruba (+297)" },
    { code: "+298", label: "Faroe Islands (+298)" },
    { code: "+299", label: "Greenland (+299)" },
  ];

  export const customLabels = {
        "AF": { primary: "Afghanistan", secondary: "+93" },
        "AL": { primary: "Albania", secondary: "+355" },
        "DZ": { primary: "Algeria", secondary: "+213" },
        "AS": { primary: "American Samoa", secondary: "+1-684" },
        "AD": { primary: "Andorra", secondary: "+376" },
        "AO": { primary: "Angola", secondary: "+244" },
        "AI": { primary: "Anguilla", secondary: "+1-264" },
        "AG": { primary: "Antigua and Barbuda", secondary: "+1-268" },
        "AR": { primary: "Argentina", secondary: "+54" },
        "AM": { primary: "Armenia", secondary: "+374" },
        "AW": { primary: "Aruba", secondary: "+297" },
        "AU": { primary: "Australia", secondary: "+61" },
        "AT": { primary: "Austria", secondary: "+43" },
        "AZ": { primary: "Azerbaijan", secondary: "+994" },
        "BS": { primary: "Bahamas", secondary: "+1-242" },
        "BH": { primary: "Bahrain", secondary: "+973" },
        "BD": { primary: "Bangladesh", secondary: "+880" },
        "BB": { primary: "Barbados", secondary: "+1-246" },
        "BY": { primary: "Belarus", secondary: "+375" },
        "BE": { primary: "Belgium", secondary: "+32" },
        "BZ": { primary: "Belize", secondary: "+501" },
        "BJ": { primary: "Benin", secondary: "+229" },
        "BM": { primary: "Bermuda", secondary: "+1-441" },
        "BT": { primary: "Bhutan", secondary: "+975" },
        "BO": { primary: "Bolivia", secondary: "+591" },
        "BA": { primary: "Bosnia and Herzegovina", secondary: "+387" },
        "BW": { primary: "Botswana", secondary: "+267" },
        "BR": { primary: "Brazil", secondary: "+55" },
        "VG": { primary: "British Virgin Islands", secondary: "+1-284" },
        "BN": { primary: "Brunei", secondary: "+673" },
        "BG": { primary: "Bulgaria", secondary: "+359" },
        "BF": { primary: "Burkina Faso", secondary: "+226" },
        "BI": { primary: "Burundi", secondary: "+257" },
        "KH": { primary: "Cambodia", secondary: "+855" },
        "CM": { primary: "Cameroon", secondary: "+237" },
        "CA": { primary: "Canada", secondary: "+1" },
        "CV": { primary: "Cape Verde", secondary: "+238" },
        "KY": { primary: "Cayman Islands", secondary: "+1-345" },
        "CF": { primary: "Central African Republic", secondary: "+236" },
        "TD": { primary: "Chad", secondary: "+235" },
        "CL": { primary: "Chile", secondary: "+56" },
        "CN": { primary: "China", secondary: "+86" },
        "CO": { primary: "Colombia", secondary: "+57" },
        "KM": { primary: "Comoros", secondary: "+269" },
        "CG": { primary: "Congo (Brazzaville)", secondary: "+242" },
        "CK": { primary: "Cook Islands", secondary: "+682" },
        "CR": { primary: "Costa Rica", secondary: "+506" },
        "HR": { primary: "Croatia", secondary: "+385" },
        "CU": { primary: "Cuba", secondary: "+53" },
        "CW": { primary: "Curaçao", secondary: "+599" },
        "CY": { primary: "Cyprus", secondary: "+357" },
        "CZ": { primary: "Czech Republic", secondary: "+420" },
        "DK": { primary: "Denmark", secondary: "+45" },
        "DJ": { primary: "Djibouti", secondary: "+253" },
        "DM": { primary: "Dominica", secondary: "+1-767" },
        "DO": { primary: "Dominican Republic", secondary: "+1-809" },
        "EC": { primary: "Ecuador", secondary: "+593" },
        "EG": { primary: "Egypt", secondary: "+20" },
        "SV": { primary: "El Salvador", secondary: "+503" },
        "GQ": { primary: "Equatorial Guinea", secondary: "+240" },
        "ER": { primary: "Eritrea", secondary: "+291" },
        "EE": { primary: "Estonia", secondary: "+372" },
        "ET": { primary: "Ethiopia", secondary: "+251" },
        "FK": { primary: "Falkland Islands", secondary: "+500" },
        "FJ": { primary: "Fiji", secondary: "+679" },
        "FI": { primary: "Finland", secondary: "+358" },
        "FR": { primary: "France", secondary: "+33" },
        "GA": { primary: "Gabon", secondary: "+241" },
        "GM": { primary: "Gambia", secondary: "+220" },
        "GE": { primary: "Georgia", secondary: "+995" },
        "DE": { primary: "Germany", secondary: "+49" },
        "GH": { primary: "Ghana", secondary: "+233" },
        "GI": { primary: "Gibraltar", secondary: "+350" },
        "GR": { primary: "Greece", secondary: "+30" },
        "GD": { primary: "Grenada", secondary: "+1-473" },
        "GU": { primary: "Guam", secondary: "+1-671" },
        "GT": { primary: "Guatemala", secondary: "+502" },
        "GN": { primary: "Guinea", secondary: "+224" },
        "GW": { primary: "Guinea-Bissau", secondary: "+245" },
        "GY": { primary: "Guyana", secondary: "+592" },
        "HT": { primary: "Haiti", secondary: "+509" },
        "HN": { primary: "Honduras", secondary: "+504" },
        "HK": { primary: "Hong Kong", secondary: "+852" },
        "HU": { primary: "Hungary", secondary: "+36" },
        "IS": { primary: "Iceland", secondary: "+354" },
        "IN": { primary: "India", secondary: "+91" },
        "ID": { primary: "Indonesia", secondary: "+62" },
        "IR": { primary: "Iran", secondary: "+98" },
        "IQ": { primary: "Iraq", secondary: "+964" },
        "IE": { primary: "Ireland", secondary: "+353" },
        "IL": { primary: "Israel", secondary: "+972" },
        "IT": { primary: "Italy", secondary: "+39" },
        "JM": { primary: "Jamaica", secondary: "+1-876" },
        "JP": { primary: "Japan", secondary: "+81" },
        "JO": { primary: "Jordan", secondary: "+962" },
        "KZ": { primary: "Kazakhstan", secondary: "+7" },
        "KE": { primary: "Kenya", secondary: "+254" },
        "KI": { primary: "Kiribati", secondary: "+686" },
        "KP": { primary: "North Korea", secondary: "+850" },
        "KR": { primary: "South Korea", secondary: "+82" },
        "KW": { primary: "Kuwait", secondary: "+965" },
        "KG": { primary: "Kyrgyzstan", secondary: "+996" },
        "LA": { primary: "Laos", secondary: "+856" },
        "LV": { primary: "Latvia", secondary: "+371" },
        "LB": { primary: "Lebanon", secondary: "+961" },
        "LS": { primary: "Lesotho", secondary: "+266" },
        "LR": { primary: "Liberia", secondary: "+231" },
        "LY": { primary: "Libya", secondary: "+218" },
        "LI": { primary: "Liechtenstein", secondary: "+423" },
        "LT": { primary: "Lithuania", secondary: "+370" },
        "LU": { primary: "Luxembourg", secondary: "+352" },
        "MG": { primary: "Madagascar", secondary: "+261" },
        "MW": { primary: "Malawi", secondary: "+265" },
        "MY": { primary: "Malaysia", secondary: "+60" },
        "MV": { primary: "Maldives", secondary: "+960" },
        "ML": { primary: "Mali", secondary: "+223" },
        "MT": { primary: "Malta", secondary: "+356" },
        "MH": { primary: "Marshall Islands", secondary: "+692" },
        "MR": { primary: "Mauritania", secondary: "+222" },
        "MU": { primary: "Mauritius", secondary: "+230" },
        "MX": { primary: "Mexico", secondary: "+52" },
        "FM": { primary: "Micronesia", secondary: "+691" },
        "MD": { primary: "Moldova", secondary: "+373" },
        "MC": { primary: "Monaco", secondary: "+377" },      
        "MN": { primary: "Mongolia", secondary: "+976" },
        "ME": { primary: "Montenegro", secondary: "+382" },
        "MA": { primary: "Morocco", secondary: "+212" },
        "MZ": { primary: "Mozambique", secondary: "+258" },
        "MM": { primary: "Myanmar", secondary: "+95" },
        "NA": { primary: "Namibia", secondary: "+264" },
        "NR": { primary: "Nauru", secondary: "+674" },
        "NP": { primary: "Nepal", secondary: "+977" },
        "NL": { primary: "Netherlands", secondary: "+31" },
        "NZ": { primary: "New Zealand", secondary: "+64" },
        "NI": { primary: "Nicaragua", secondary: "+505" },
        "NE": { primary: "Niger", secondary: "+227" },
        "NG": { primary: "Nigeria", secondary: "+234" },
        "NO": { primary: "Norway", secondary: "+47" },
        "OM": { primary: "Oman", secondary: "+968" },
        "PK": { primary: "Pakistan", secondary: "+92" },
        "PW": { primary: "Palau", secondary: "+680" },
        "PA": { primary: "Panama", secondary: "+507" },
        "PG": { primary: "Papua New Guinea", secondary: "+675" },
        "PY": { primary: "Paraguay", secondary: "+595" },
        "PE": { primary: "Peru", secondary: "+51" },
        "PH": { primary: "Philippines", secondary: "+63" },
        "PL": { primary: "Poland", secondary: "+48" },
        "PT": { primary: "Portugal", secondary: "+351" },
        "QA": { primary: "Qatar", secondary: "+974" },
        "RO": { primary: "Romania", secondary: "+40" },
        "RU": { primary: "Russia", secondary: "+7" },
        "RW": { primary: "Rwanda", secondary: "+250" },
        "WS": { primary: "Samoa", secondary: "+685" },
        "SM": { primary: "San Marino", secondary: "+378" },
        "ST": { primary: "Sao Tome and Principe", secondary: "+239" },
        "SA": { primary: "Saudi Arabia", secondary: "+966" },
        "SN": { primary: "Senegal", secondary: "+221" },
        "RS": { primary: "Serbia", secondary: "+381" },
        "SC": { primary: "Seychelles", secondary: "+248" },
        "SL": { primary: "Sierra Leone", secondary: "+232" },
        "SG": { primary: "Singapore", secondary: "+65" },
        "SK": { primary: "Slovakia", secondary: "+421" },
        "SI": { primary: "Slovenia", secondary: "+386" },
        "SB": { primary: "Solomon Islands", secondary: "+677" },
        "SO": { primary: "Somalia", secondary: "+252" },
        "ZA": { primary: "South Africa", secondary: "+27" },
        "ES": { primary: "Spain", secondary: "+34" },
        "LK": { primary: "Sri Lanka", secondary: "+94" },
        "SD": { primary: "Sudan", secondary: "+249" },
        "SR": { primary: "Suriname", secondary: "+597" },
        "SE": { primary: "Sweden", secondary: "+46" },
        "CH": { primary: "Switzerland", secondary: "+41" },
        "SY": { primary: "Syria", secondary: "+963" },
        "TW": { primary: "Taiwan", secondary: "+886" },
        "TJ": { primary: "Tajikistan", secondary: "+992" },
        "TZ": { primary: "Tanzania", secondary: "+255" },
        "TH": { primary: "Thailand", secondary: "+66" },
        "TG": { primary: "Togo", secondary: "+228" },
        "TO": { primary: "Tonga", secondary: "+676" },
        "TT": { primary: "Trinidad and Tobago", secondary: "+1-868" },
        "TN": { primary: "Tunisia", secondary: "+216" },
        "TR": { primary: "Turkey", secondary: "+90" },
        "TM": { primary: "Turkmenistan", secondary: "+993" },
        "TV": { primary: "Tuvalu", secondary: "+688" },
        "UG": { primary: "Uganda", secondary: "+256" },
        "UA": { primary: "Ukraine", secondary: "+380" },
        "AE": { primary: "United Arab Emirates", secondary: "+971" },
        "GB": { primary: "United Kingdom", secondary: "+44" },
        "US": { primary: "United States", secondary: "+1" },
        "UY": { primary: "Uruguay", secondary: "+598" },
        "UZ": { primary: "Uzbekistan", secondary: "+998" },
        "VU": { primary: "Vanuatu", secondary: "+678" },
        "VE": { primary: "Venezuela", secondary: "+58" },
        "VN": { primary: "Vietnam", secondary: "+84" },
        "YE": { primary: "Yemen", secondary: "+967" },
        "ZM": { primary: "Zambia", secondary: "+260" },
        "ZW": { primary: "Zimbabwe", secondary: "+263" }
  };
  
  export const buyFunction = async () => {
    try {
      const response = await axios.post(test_url+'api/payment');
      if (response.status === 200) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.log('Error processing payment:', error);
    }
  };