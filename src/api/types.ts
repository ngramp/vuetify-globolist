
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  body: string;
}


