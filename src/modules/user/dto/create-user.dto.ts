import { UserRole } from "src/constants/enum.constants";

export class CreateUserDto {
    name: string;
    role?: UserRole
}
