import { CompanyExperience } from '@/lib/types';

interface ExperienceSectionProps {
    experiences: CompanyExperience[] | null | undefined;
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
    // Fungsi untuk memformat tanggal
    const formatDate = (dateValue: any) => {
        if (!dateValue) return 'Present';

        // Menangani jika dateValue adalah Firestore Timestamp (memiliki properti seconds)
        const date = dateValue.seconds
            ? new Date(dateValue.seconds * 1000)
            : new Date(dateValue);

        return date.toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
        });
    };

    const calculateDuration = (start: any, end: any) => {
        const startDate = start?.seconds ? new Date(start.seconds * 1000) : new Date(start);
        const endDate = end
            ? (end.seconds ? new Date(end.seconds * 1000) : new Date(end))
            : new Date();

        let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        totalMonths += endDate.getMonth() - startDate.getMonth();

        totalMonths += 1;

        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        const yearText = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
        const monthText = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';

        return [yearText, monthText].filter(Boolean).join(' ');
    };

    if (!experiences || !Array.isArray(experiences) || experiences.length === 0) return null;

    return (
        <div className="flex flex-col gap-8 mt-4">
            {experiences.map((exp, index) => (
                <div key={index} className="flex flex-col gap-3 relative pl-6 border-l border-neutral-200 dark:border-neutral-800">
                    {/* Dot Indikator Timeline */}
                    <div className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 border-2 border-white dark:border-neutral-950" />

                    {/* Header Perusahaan */}
                    <div className="flex flex-row items-center gap-2">
                        {exp.imageUrl && (
                            <img
                                src={Array.isArray(exp.imageUrl) ? exp.imageUrl[0] : exp.imageUrl}
                                alt={exp.company}
                                className="w-6 h-6 object-contain rounded-md bg-white dark:bg-neutral-800 p-0.5 border border-neutral-100 dark:border-neutral-800"
                            />
                        )}
                        <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-100">
                            {exp.company}
                        </h3>
                        <span className="text-[10px] font-medium text-neutral-500 bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            {exp.type}
                        </span>
                        <span className="text-[10px] font-medium text-neutral-500 bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            {formatDate(exp.periodStart)} - {formatDate(exp.periodEnd)}
                            <span className="ml-1 text-neutral-400 dark:text-neutral-600">
                                ({calculateDuration(exp.periodStart, exp.periodEnd)})
                            </span>
                        </span>
                    </div>

                    {/* List Pekerjaan/Role */}
                    <div className="flex flex-col gap-4">
                        {[...exp.work].reverse().map((role, rIndex) => (
                            <div key={rIndex} className="flex flex-col gap-1.5">
                                <div className="flex justify-between items-start gap-4">
                                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                                        {role.role}
                                    </span>
                                    <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-500 whitespace-nowrap bg-neutral-50 dark:bg-neutral-900/50 px-2 py-0.5 rounded border border-neutral-100 dark:border-neutral-800/50">
                                        {formatDate(role.periodStart)} — {formatDate(role.periodEnd)}
                                    </span>
                                </div>

                                {role.description && (
                                    <ul className="flex flex-col gap-2 mt-1"> {/* gap-2 mengatur jarak antar poin */}
                                        {role.description.split('•').filter(item => item.trim() !== '').map((point, pIndex) => (
                                            <li key={pIndex} className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed flex gap-2">
                                                <span className="text-neutral-400">•</span>
                                                <span>{point.trim()}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}