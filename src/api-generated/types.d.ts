// This file is generated automatically, do NOT modify it.

declare namespace ApiTypes {
  export interface AddUserToGroupRequestDto {
    userId: number;
    groupId: number;
  }
  export interface AddUserToGroupResponseDto {
    error?: "PERMISSION_DENIED" | "NO_SUCH_USER" | "NO_SUCH_GROUP" | "USER_ALREADY_IN_GROUP";
  }
  export interface CheckAvailabilityResponseDto {
    usernameAvailable?: boolean;
    emailAvailable?: boolean;
  }
  export interface CreateGroupRequestDto {
    groupName: string;
  }
  export interface CreateGroupResponseDto {
    error?: "PERMISSION_DENIED" | "DUPLICATE_GROUP_NAME";
    groupId?: number;
  }
  export interface CreateProblemRequestDto {
    type: string;
    statement: ApiTypes.ProblemStatementDto;
  }
  export interface CreateProblemResponseDto {
    error?: "PERMISSION_DENIED" | "FAILED";
    id?: number;
  }
  export interface DeleteGroupRequestDto {
    groupId: number;
    force: boolean;
  }
  export interface DeleteGroupResponseDto {
    error?: "PERMISSION_DENIED" | "NO_SUCH_GROUP" | "GROUP_NOT_EMPTY" | "GROUP_HAVE_PRIVILIGE";
  }
  export interface GetGroupMetaResponseDto {
    error?: "NO_SUCH_GROUP";
    groupMeta?: ApiTypes.GroupMetaDto;
  }
  export interface GetProblemDetailResponseDto {
    error?: "PERMISSION_DENIED" | "NO_SUCH_PROBLEM";
    meta?: ApiTypes.ProblemMetaDto;
    permission?: {};
    title?: string;
    resultLocale?: "en_US" | "zh_CN";
    samples?: ApiTypes.ProblemSampleDataMemberDto[];
    contentSections?: ApiTypes.ProblemContentSectionDto[];
    judgeInfo?: {};
  }
  export interface GetProblemPermissionsResponseDto {
    error?: "NO_SUCH_PROBLEM" | "PERMISSION_DENIED";
    users?: ApiTypes.UserMetaDto[];
    groups?: ApiTypes.GroupMetaDto[];
  }
  export interface GetProblemStatementsAllLocalesResponseDto {
    permission?: {};
    error?: "PERMISSION_DENIED" | "NO_SUCH_PROBLEM";
    meta?: ApiTypes.ProblemMetaDto;
    statement?: ApiTypes.ProblemStatementDto;
  }
  export interface GetSelfMetaResponseDto {
    userMeta?: ApiTypes.UserMetaDto;
  }
  export interface GetUserMetaResponseDto {
    userMeta?: ApiTypes.UserMetaDto;
    privileges?: ("MANAGE_USER" | "MANAGE_USER_GROUP" | "MANAGE_PROBLEM" | "MANAGE_CONTEST" | "MANAGE_DISCUSSION")[];
  }
  export interface GroupMetaDto {
    id: number;
    name: string;
    ownerId: number;
  }
  export interface LoginRequestDto {
    username: string;
    password: string;
  }
  export interface LoginResponseDto {
    error?: "ALREADY_LOGGEDIN" | "NO_SUCH_USER" | "WRONG_PASSWORD";
    userMeta?: ApiTypes.UserMetaDto;
    token?: string;
  }
  namespace Parameters {
    export type DisplayId = string;
    export type Email = string;
    export type GetPrivileges = boolean;
    export type GroupId = string;
    export type Id = string;
    export type Locale = "en_US" | "zh_CN";
    export type PermissionType = "READ" | "WRITE";
    export type ProblemId = string;
    export type UserId = string;
    export type Username = string;
  }
  export interface ProblemContentSectionDto {
    sectionTitle: string;
    type: "TEXT" | "SAMPLE";
    sampleId?: number;
    text?: string;
  }
  export interface ProblemLocalizedContentDto {
    locale: "en_US" | "zh_CN";
    title: string;
    contentSections: ApiTypes.ProblemContentSectionDto[];
  }
  export interface ProblemMetaDto {
    id: number;
    displayId?: number;
    type: string;
    isPublic: boolean;
    ownerId: number;
    locales: ("en_US" | "zh_CN")[];
  }
  export interface ProblemSampleDataMemberDto {
    inputData: string;
    outputData: string;
  }
  export interface ProblemStatementDto {
    localizedContents: ApiTypes.ProblemLocalizedContentDto[];
    samples: ApiTypes.ProblemSampleDataMemberDto[];
  }
  export interface QueryParameters {
    problemId: ApiTypes.Parameters.ProblemId;
    permissionType: ApiTypes.Parameters.PermissionType;
  }
  export interface QueryProblemSetRequestDto {
    locale: "en_US" | "zh_CN";
    skipCount: number;
    takeCount: number;
  }
  export interface QueryProblemSetResponseDto {
    error?: "TAKE_TOO_MANY";
    result?: ApiTypes.QueryProblemSetResponseItemDto[];
    count?: number;
  }
  export interface QueryProblemSetResponseItemDto {
    meta: ApiTypes.ProblemMetaDto;
    title: string;
    titleLocale: "en_US" | "zh_CN";
  }
  export interface RegisterRequestDto {
    username: string;
    email: string;
    password: string;
  }
  export interface RegisterResponseDto {
    error?: "ALREADY_LOGGEDIN" | "DUPLICATE_USERNAME" | "DUPLICATE_EMAIL";
    userMeta?: ApiTypes.UserMetaDto;
    token?: string;
  }
  export interface RemoveUserFromGroupRequestDto {
    userId: number;
    groupId: number;
  }
  export interface RemoveUserFromGroupResponseDto {
    error?:
      | "PERMISSION_DENIED"
      | "NO_SUCH_USER"
      | "NO_SUCH_GROUP"
      | "USER_NOT_IN_GROUP"
      | "OWNER_OR_GROUP_ADMIN_CAN_NOT_BE_REMOVED";
  }
  export type RequestBody = ApiTypes.SetProblemPublicRequestDto;
  namespace Responses {
    export type $200 = ApiTypes.GetProblemPermissionsResponseDto;
    export type $201 = ApiTypes.SetProblemPublicResponseDto;
  }
  export interface SetGroupAdminRequestDto {
    userId: number;
    groupId: number;
    isGroupAdmin: boolean;
  }
  export interface SetGroupAdminResponseDto {
    error?: "PERMISSION_DENIED" | "NO_SUCH_USER" | "NO_SUCH_GROUP" | "USER_NOT_IN_GROUP";
  }
  export interface SetProblemDisplayIdRequestDto {
    problemId: number;
    displayId: number;
  }
  export interface SetProblemDisplayIdResponseDto {
    error?: "PERMISSION_DENIED" | "NO_SUCH_PROBLEM" | "DUPLICATE_DISPLAY_ID" | "PUBLIC_PROBLEM_MUST_HAVE_DISPLAY_ID";
  }
  export interface SetProblemPermissionsRequestDto {
    problemId: number;
    permissionType: "READ" | "WRITE";
    userIds: number[];
    groupIds: number[];
  }
  export interface SetProblemPermissionsResponseDto {
    error?: "PERMISSION_DENIED" | "NO_SUCH_PROBLEM" | "NO_SUCH_USER" | "NO_SUCH_GROUP";
    errorObjectId?: number;
  }
  export interface SetProblemPublicRequestDto {
    problemId: number;
    isPublic: boolean;
  }
  export interface SetProblemPublicResponseDto {
    error?: "PERMISSION_DENIED" | "NO_SUCH_PROBLEM" | "NO_DISPLAY_ID";
  }
  export interface SetUserPrivilegesRequestDto {
    userId: number;
    privileges: ("MANAGE_USER" | "MANAGE_USER_GROUP" | "MANAGE_PROBLEM" | "MANAGE_CONTEST" | "MANAGE_DISCUSSION")[];
  }
  export interface SetUserPrivilegesResponseDto {
    error?: "PERMISSION_DENIED" | "NO_SUCH_USER" | "FAILED";
  }
  export interface UpdateProblemRequestUpdatingLocalizedContentDto {
    locale: "en_US" | "zh_CN";
    title?: string;
    contentSections?: ApiTypes.ProblemContentSectionDto[];
  }
  export interface UpdateProblemStatementRequestDto {
    problemId: number;
    localizedContents: ApiTypes.UpdateProblemRequestUpdatingLocalizedContentDto[];
    samples?: ApiTypes.ProblemSampleDataMemberDto[];
  }
  export interface UpdateProblemStatementResponseDto {
    error?: "PERMISSION_DENIED" | "NO_SUCH_PROBLEM" | "FAILED";
  }
  export interface UpdateUserProfileRequestDto {
    userId: number;
    username?: string;
    email?: string;
    bio?: string;
    oldPassword?: string;
    password?: string;
  }
  export interface UpdateUserProfileResponseDto {
    error?: "PERMISSION_DENIED" | "NO_SUCH_USER" | "WRONG_OLD_PASSWORD" | "DUPLICATE_USERNAME" | "DUPLICATE_EMAIL";
  }
  export interface UserMetaDto {
    id: number;
    username: string;
    email: string;
    bio: string;
    isAdmin: boolean;
  }
}