import type { DummyRule, ExternalPluginEntry, OxlintConfig } from 'oxlint';

export type RuleFile = {
  plugins?: string[];
  jsPlugins?: ExternalPluginEntry[];
  rules: Record<string, DummyRule>;
};

// Rules
export declare const baseRules: RuleFile;
export declare const importRules: RuleFile;
export declare const promiseRules: RuleFile;
export declare const typescriptRules: RuleFile;
export declare const reactRules: RuleFile;
export declare const reactA11yRules: RuleFile;
export declare const nodeRules: RuleFile;
export declare const unicornRules: RuleFile;
export declare const vitestRules: RuleFile;
export declare const playwrightRules: RuleFile;
export declare const storybookRules: RuleFile;
export declare const styledComponentsRules: RuleFile;
export declare const testingLibraryRules: RuleFile;
export declare const barrelFilesRules: RuleFile;

// Configs
export declare const javascriptConfig: OxlintConfig;
export declare const typescriptConfig: OxlintConfig;
export declare const reactConfig: OxlintConfig;
export declare const nodeConfig: OxlintConfig;
export declare const vitestConfig: OxlintConfig;
export declare const playwrightConfig: OxlintConfig;
export declare const storybookConfig: OxlintConfig;
export declare const styledComponentsConfig: OxlintConfig;
export declare const testingLibraryConfig: OxlintConfig;
