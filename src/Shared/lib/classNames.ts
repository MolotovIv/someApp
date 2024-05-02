type Mode = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mode = {}, addiitional: string[] = []): string => {
	return [cls,
		...addiitional.filter(Boolean),
		Object.entries(mods)
			.filter(([key, value]) => Boolean(value))
			.map(([cls]) => cls)
	].join(' ')
} 