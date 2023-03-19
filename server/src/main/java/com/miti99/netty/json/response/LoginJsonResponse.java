package com.miti99.netty.json.response;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class LoginJsonResponse extends BaseJsonResponse {

  int userId;
  String userName;
}
