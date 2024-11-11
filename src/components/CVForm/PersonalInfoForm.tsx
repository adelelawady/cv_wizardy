import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
  location: string;
};

export const PersonalInfoForm = ({
  data,
  onChange,
}: {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
          className="cv-input"
          placeholder="John Doe"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => onChange({ ...data, email: e.target.value })}
          className="cv-input"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          value={data.phone}
          onChange={(e) => onChange({ ...data, phone: e.target.value })}
          className="cv-input"
          placeholder="+1 234 567 890"
        />
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          value={data.location}
          onChange={(e) => onChange({ ...data, location: e.target.value })}
          className="cv-input"
          placeholder="City, Country"
        />
      </div>
    </div>
  );
};