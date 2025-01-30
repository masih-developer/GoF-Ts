// Singleton Logger Class
// log method
// Can have multiple method

class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  log(message: string): void {
    const timestamp = new Date();
    console.log(`[${timestamp.toLocaleString()}] - ${message}`);
  }
}

export default function test() {
  const logger1 = Logger.getInstance();
  logger1.log("this is first message!");

  const logger2 = Logger.getInstance();
  logger2.log("this is second message!");
}
