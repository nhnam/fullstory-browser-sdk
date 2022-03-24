import { NativeModules } from "react-native";

const { FullStory } = NativeModules;

export const LogLevel = {
  Log: 0, // Clamps to Debug on iOS
  Debug: 1,
  Info: 2, // Default
  Warn: 3,
  Error: 4,
  Assert: 5, // Clamps to Error on Android
};

export interface IFullStory {
    
  LogLevel: number;

  anonymize(): void;

  identify(uid: string, userVars: { [key: string]: any }): void;

  setUserVars(userVars: { [key: string]: any }): void;

  getCurrentSession(): Promise<string | undefined>;

  getCurrentSessionURL():Promise<string | undefined>;

  consent(consented: boolean): void;

  event(name: string, properties: { [key: string]: any }): void;

  shutdown(): void;

  restart(): void;

  log(level: number, message: string): void;

  onReady(): Promise<{ [key: string]: any }|undefined>;
}

FullStory.LogLevel = LogLevel;

export default FullStory as IFullStory;
