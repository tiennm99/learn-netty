package com.miti99.netty;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;

@Slf4j
public class TestLogback {

  @Test
  public void testLogback() {
    log.debug("debug");
    log.info("info");
    log.warn("warn");
    log.error("error");
  }
}
