import { Account } from "@app/modules/account/models/account.model";

export interface AuthUserResponseDto {
  user : Account,
  tokens: { access: string, refresh : string }
}
