import {
    useState,
    useMemo
} from "react";

export function useProjectFilter(projects, itemsPerPage = 3) {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProjects = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return projects;

        return projects.filter((project) => {
            const matchTitle = project.title.toLowerCase().includes(query);
            const matchDesc = project.description.toLowerCase().includes(query);
            const matchTech = project.tech.some((t) => t.toLowerCase().includes(query));
            const matchCategory = project.category.toLowerCase().includes(query);
            return matchTitle || matchDesc || matchTech || matchCategory;
        });
    }, [projects, searchQuery]);

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage) || 1;

    const paginatedProjects = useMemo(() => {
        const startIdx = (currentPage - 1) * itemsPerPage;
        return filteredProjects.slice(startIdx, startIdx + itemsPerPage);
    }, [filteredProjects, currentPage, itemsPerPage]);

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    return {
        searchQuery,
        setSearchQuery: handleSearch,
        currentPage,
        setCurrentPage,
        totalPages,
        paginatedProjects,
    };
}