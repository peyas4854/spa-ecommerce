<template>
    <nav
        class="pagination-section align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between my-4 my-sm-5"
        aria-label="...">
        <div class="show">
            <select v-model="$parent.form.per_page" @change="$parent.getProducts()" class="form-select">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="100000">All</option>
            </select>

        </div>
        <div class="show">
            Showing {{ pagination.from }} to {{ pagination.to }} of {{ pagination.total  }} entries
        </div>
        <div>
            <ul class="pagination justify-content-center m-0">
                <li class="page-item" :class="{ disabled: pagination.current_page <= 1 }">
                    <a class="page-link" @click.prevent="changePage(1)">
                        <i class="fa fa-angle-double-left"></i>
                    </a>
                </li>
                <li class="page-item" :class="{ disabled: pagination.current_page <= 1 }">
                    <a class="page-link" @click.prevent="changePage(pagination.current_page - 1)">
                        <i class="fa fa-arrow-left"></i>
                    </a>
                </li>

                <li class="page-item" v-for="page in pages" :key="page" :class="isCurrentPage(page) ? 'active' : ''">
                    <a class="page-link cursor-grab" @click.prevent="changePage(page)">{{ page }}
                        <span v-if="isCurrentPage(page)" class="sr-only">(current)</span>
                    </a>
                </li>

                <li class="page-item" :class="{ disabled: pagination.current_page >= pagination.last_page }">
                    <a class="page-link" @click.prevent="changePage(pagination.current_page + 1)">
                        <i class="fa fa-arrow-right"></i>
                    </a>
                </li>
                <li class="page-item" :class="{ disabled: pagination.current_page >= pagination.last_page }">
                    <a class="page-link" @click.prevent="changePage(pagination.last_page)">
                        <i class="fa fa-angle-double-right"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {

    props   : ['pagination', 'offset'],
    methods : {
        isCurrentPage(page) {
            return this.pagination.current_page === page
        },
        changePage(page) {
            if (page > this.pagination.last_page) {
                page = this.pagination.last_page;
            }
            this.pagination.current_page = page;
            this.$emit('paginate');
        }
    },

    computed: {
        pages() {
            let pages = []

            let from = this.pagination.current_page - Math.floor(this.offset / 2)

            if (from < 1) {
                from = 1
            }

            let to = from + this.offset - 1

            if (to > this.pagination.last_page) {
                to = this.pagination.last_page
            }

            while (from <= to) {
                pages.push(from)
                from++
            }

            return pages
        }
    }
}
</script>
