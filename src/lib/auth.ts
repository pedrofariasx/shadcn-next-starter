/*
 * File: auth.ts
 * Project: new
 * Author: Pedro Farias
 * Created: 2026-04-16
 * 
 * Last Modified: Thu Apr 16 2026
 * Modified By: Pedro Farias
 */

import NextAuth from "next-auth";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
});
