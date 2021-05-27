export class Response {
  message: string | undefined;
  user: User | undefined;
  status: string | undefined;
  tweets: TweetsEntity | undefined;
}

export class AllUserResponse {
  allUsers?: (UserEntity)[] | null;
}

export class UserEntity {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  userId: string | undefined;
  password: string | undefined;
  contactNumber: number | undefined;
}

export class User {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  userId: string | undefined;
  password: string | undefined;
  contactNumber: number | undefined;
  tweets?: (TweetsEntity)[] | null;
}
export class TweetsEntity {
  tweet: string | undefined;
  author: string | undefined;
  _id: string | undefined;
}
