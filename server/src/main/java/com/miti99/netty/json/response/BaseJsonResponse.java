package com.miti99.netty.json.response;

import com.google.gson.Gson;

public abstract class BaseJsonResponse {

  private static final Gson gson = new Gson();

  public String toJson() {
    return gson.toJson(this);
  }
}
