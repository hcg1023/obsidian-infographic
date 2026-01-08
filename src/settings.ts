import { App, PluginSettingTab, Setting } from "obsidian";
import { getThemes } from '@antv/infographic';
import InfographicPlugin from "./main";

export interface InfographicSettings {
	// 默认主题
	defaultTheme?: string;
}

export const DEFAULT_SETTINGS: InfographicSettings = {
	defaultTheme: 'default'
};

export class InfographicSettingTab extends PluginSettingTab {
	plugin: InfographicPlugin;

	constructor(app: App, plugin: InfographicPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		// 获取可用主题列表
		const themes = ['default', ...getThemes()];

		new Setting(containerEl)
			.setName('Default theme')
			.setDesc('Select the default theme for rendering infographics')
			.addDropdown(dropdown => dropdown
				.addOptions(Object.fromEntries(themes.map(theme => [theme, theme])))
				.setValue(this.plugin.settings.defaultTheme || 'default')
				.onChange(async (value) => {
					this.plugin.settings.defaultTheme = value;
					await this.plugin.saveSettings();
				}));
	}
}
