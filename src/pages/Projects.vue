<template>
  <section
    id="projects"
    class="min-h-screen scroll-mt-14 flex flex-col items-center pt-10 md:pt-12 pb-10 md:pb-12 transition-opacity duration-700 relative overflow-x-hidden"
    :class="{ 'opacity-100': active, 'opacity-50': !active }"
  >
    <h2 class="px-6 md:px-12 lg:px-20 text-center text-white">
      <span class="block mb-2 text-base sm:text-lg md:text-xl font-medium"
        >02. PROJECTS</span
      >
    </h2>

    <ul class="w-full md:w-11/12 lg:w-4/5 border-t border-white/30 text-white">
      <!-- item -->
      <li
        class="project-item px-6 md:px-12 lg:px-20 transition-all duration-300 ease-in-out flex flex-col md:flex-row md:justify-between md:items-center group relative border-b border-white/30 py-4 md:py-6"
      >
        <div class="min-w-0">
          <h3
            class="transition-transform duration-300 text-2xl sm:text-3xl md:text-4xl font-semibold md:group-hover:-translate-x-[10px]"
          >
            코웨이 ITO 통합 운영 프로젝트
          </h3>
          <p
            class="transition-transform duration-300 mt-2 text-sm sm:text-base md:group-hover:-translate-x-[10px]"
          >
            코웨이 디지털세일즈, 모바일주문 하이브리드 앱 퍼블리싱
          </p>
          <p
            class="transition-transform duration-300 text-xs sm:text-sm text-gray-300 mt-1.5 flex flex-wrap gap-1.5 md:group-hover:-translate-x-[10px]"
          >
            <span>#SCSS</span><span>#CSS3</span><span>#Vuetify</span
            ><span>#HTML5</span><span>#React</span> <span>#Vue.js</span
            ><span>#GitHub</span>
          </p>
        </div>

        <div class="mt-3 md:mt-0 flex items-center gap-3">
          <router-link
            :to="{ name: 'ProjectDetail', params: { id: 7 } }"
            class="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
          >
            <span class="text-sm sm:text-base">VIEW DETAILS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </router-link>
        </div>

        <!-- mockup: md↑에서만 노출 -->
        <img
          src="../assets/mockup-07.png"
          alt="메가존 목업 이미지"
          class="hidden md:block absolute -top-8 right-0 w-[140px] lg:w-[140px] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />
      </li>
      <!-- item -->
      <li
        class="project-item px-6 md:px-12 lg:px-20 transition-all duration-300 ease-in-out flex flex-col md:flex-row md:justify-between md:items-center group relative border-b border-white/30 py-4 md:py-6"
      >
        <div class="min-w-0">
          <h3
            class="transition-transform duration-300 text-2xl sm:text-3xl md:text-4xl font-semibold md:group-hover:-translate-x-[10px]"
          >
            메가존 클라우드 PMS 구축 및 운영 프로젝트
          </h3>
          <p
            class="transition-transform duration-300 mt-2 text-sm sm:text-base md:group-hover:-translate-x-[10px]"
          >
            메가존 클라우드 PMS 퍼블리싱(운영 및 신규 개발)
          </p>
          <p
            class="transition-transform duration-300 text-xs sm:text-sm text-gray-300 mt-1.5 flex flex-wrap gap-1.5 md:group-hover:-translate-x-[10px]"
          >
            <span>#SCSS</span><span>#Mui</span><span>#TypeScript</span
            ><span>#React</span> <span>#HTML5</span><span>#Bitbucket</span>
          </p>
        </div>

        <div class="mt-3 md:mt-0 flex items-center gap-3">
          <router-link
            :to="{ name: 'ProjectDetail', params: { id: 6 } }"
            class="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
          >
            <span class="text-sm sm:text-base">VIEW DETAILS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </router-link>
        </div>

        <!-- mockup: md↑에서만 노출 -->
        <img
          src="../assets/mockup-01.png"
          alt="메가존 목업 이미지"
          class="hidden md:block absolute top-1 left-0 w-[220px] lg:w-[250px] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />
      </li>

      <!-- item -->
      <li
        class="project-item px-6 md:px-12 lg:px-20 transition-all duration-300 ease-in-out flex flex-col md:flex-row md:justify-between md:items-center group relative border-b border-white/30 py-4 md:py-6"
      >
        <div class="min-w-0">
          <h3
            class="transition-transform duration-300 text-2xl sm:text-3xl md:text-4xl font-semibold md:group-hover:-translate-x-[10px]"
          >
            우아한형제들 채용 시스템 <br />(우아한형제들 ITO 개발/운영 프로젝트)
          </h3>
          <p
            class="transition-transform duration-300 mt-2 text-sm sm:text-base md:group-hover:-translate-x-[10px]"
          >
            채용 시스템의 운영 및 신규 개발 건 퍼블리싱을 주로 담당했고,
            프론트엔드 지원 업무를 병행
          </p>
          <p
            class="transition-transform duration-300 text-xs sm:text-sm text-gray-300 mt-1.5 flex flex-wrap gap-1.5 md:group-hover:-translate-x-[10px]"
          >
            <span>#SCSS</span><span>#SASS</span><span>#Vuetify</span
            ><span>#Javascript</span> <span>#Vue.js</span><span>#HTML5</span
            ><span>#GitLab</span>
          </p>
        </div>

        <div class="mt-3 md:mt-0 flex items-center gap-3">
          <router-link
            :to="{ name: 'ProjectDetail', params: { id: 5 } }"
            class="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
          >
            <span class="text-sm sm:text-base">VIEW DETAILS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </router-link>
        </div>

        <img
          src="../assets/mockup-02.png"
          alt="우아한형제들 목업 이미지"
          class="hidden md:block absolute -top-5 right-[180px] lg:right-[220px] w-[180px] lg:w-[200px] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />
      </li>

      <!-- item -->
      <li
        class="project-item px-6 md:px-12 lg:px-20 transition-all duration-300 ease-in-out flex flex-col md:flex-row md:justify-between md:items-center group relative border-b border-white/30 py-4 md:py-6"
      >
        <div class="min-w-0">
          <h3
            class="transition-transform duration-300 text-2xl sm:text-3xl md:text-4xl font-semibold md:group-hover:-translate-x-[10px]"
          >
            배민 아카데미<br />(우아한형제들 ITO 개발/운영 프로젝트)
          </h3>
          <p
            class="transition-transform duration-300 mt-2 text-sm sm:text-base md:group-hover:-translate-x-[10px]"
          >
            우아한형제들 배달의 민족 교육 플랫폼 및 이벤트 페이지 퍼블리싱
          </p>
          <p
            class="transition-transform duration-300 text-xs sm:text-sm text-gray-300 mt-1.5 flex flex-wrap gap-1.5 md:group-hover:-translate-x-[10px]"
          >
            <span>#SCSS</span><span>#SASS</span><span>#Vuetify</span
            ><span>#Javascript</span> <span>#Vue.js</span><span>#HTML5</span
            ><span>#GitLab</span>
          </p>
        </div>

        <div class="mt-3 md:mt-0 flex items-center gap-3">
          <router-link
            :to="{ name: 'ProjectDetail', params: { id: 4 } }"
            class="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
          >
            <span class="text-sm sm:text-base">VIEW DETAILS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </router-link>
        </div>

        <img
          src="../assets/mockup-03.png"
          alt="배민 아카데미 목업 이미지"
          class="hidden md:block absolute top-1 left-0 w-[220px] lg:w-[250px] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />
      </li>

      <!-- item -->
      <li
        class="project-item px-6 md:px-12 lg:px-20 transition-all duration-300 ease-in-out flex flex-col md:flex-row md:justify-between md:items-center group relative border-b border-white/30 py-4 md:py-6"
      >
        <div class="min-w-0">
          <h3
            class="transition-transform duration-300 text-2xl sm:text-3xl md:text-4xl font-semibold md:group-hover:-translate-x-[10px]"
          >
            아모레 뷰티포인트 웹/앱 운영 및 리뉴얼 프로젝트
          </h3>
          <p
            class="transition-transform duration-300 mt-2 text-sm sm:text-base md:group-hover:-translate-x-[10px]"
          >
            뷰티포인트 반응형 웹/하이브리드 앱 퍼블리싱 및 이벤트 페이지
            퍼블리싱
          </p>
          <p
            class="transition-transform duration-300 text-xs sm:text-sm text-gray-300 mt-1.5 flex flex-wrap gap-1.5 md:group-hover:-translate-x-[10px]"
          >
            <span>#HTML5</span><span>#CSS3</span><span>#Javascript</span
            ><span>#jQuery</span><span>#GitLab</span><span>#웹접근성</span>
          </p>
        </div>

        <div class="mt-3 md:mt-0 flex items-center gap-3">
          <router-link
            :to="{ name: 'ProjectDetail', params: { id: 3 } }"
            class="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
          >
            <span class="text-sm sm:text-base">VIEW DETAILS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </router-link>
        </div>

        <img
          src="../assets/mockup-04.png"
          alt="아모레 목업 이미지"
          class="hidden md:block absolute -top-5 right-[160px] lg:right-[220px] w-[140px] lg:w-[150px] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />
      </li>

      <!-- 나머지 2개는 이미지 없음 (필요시 같은 패턴으로 추가) -->
      <li
        class="project-item px-6 md:px-12 lg:px-20 transition-all duration-300 ease-in-out flex flex-col md:flex-row md:justify-between md:items-center group relative border-b border-white/30 py-4 md:py-6"
      >
        <div class="min-w-0">
          <h3
            class="transition-transform duration-300 text-2xl sm:text-3xl md:text-4xl font-semibold md:group-hover:-translate-x-[10px]"
          >
            르노캐피탈 홈페이지 운영 및 구축 프로젝트
          </h3>
          <p
            class="transition-transform duration-300 mt-2 text-sm sm:text-base md:group-hover:-translate-x-[10px]"
          >
            - 르노캐피탈 홈페이지 견적페이지 풀스택 개발(견적 인터페이스 및
            프론트엔드 개발)<br />
            - 르노캐피탈 홈페이지 리뉴얼 프로젝트 관리
          </p>
          <p
            class="transition-transform duration-300 text-xs sm:text-sm text-gray-300 mt-1.5 flex flex-wrap gap-1.5 md:group-hover:-translate-x-[10px]"
          >
            <span>#Java</span><span>#Oracle DB</span><span>#Javascript</span
            ><span>#jQuery</span><span>#HTML5</span><span>#CSS3</span>
          </p>
        </div>

        <div class="mt-3 md:mt-0 flex items-center gap-3">
          <router-link
            :to="{ name: 'ProjectDetail', params: { id: 2 } }"
            class="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
          >
            <span class="text-sm sm:text-base">VIEW DETAILS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </router-link>
        </div>
      </li>

      <li
        class="project-item px-6 md:px-12 lg:px-20 transition-all duration-300 ease-in-out flex flex-col md:flex-row md:justify-between md:items-center group relative border-b border-white/30 py-4 md:py-6"
      >
        <div class="min-w-0">
          <h3
            class="transition-transform duration-300 text-2xl sm:text-3xl md:text-4xl font-semibold md:group-hover:-translate-x-[10px]"
          >
            순천향 병원 통합 의료 정보시스템 개발 프로젝트
          </h3>
          <p
            class="transition-transform duration-300 mt-2 text-sm sm:text-base md:group-hover:-translate-x-[10px]"
          >
            EMR 기반 통합 의료 정보시스템 구축 업무를 수행
          </p>
          <p
            class="transition-transform duration-300 text-xs sm:text-sm text-gray-300 mt-1.5 flex flex-wrap gap-1.5 md:group-hover:-translate-x-[10px]"
          >
            <span>#Java</span><span>#Oracle DB</span><span>#Javascript</span
            ><span>#jQuery</span>
          </p>
        </div>

        <div class="mt-3 md:mt-0 flex items-center gap-3">
          <router-link
            :to="{ name: 'ProjectDetail', params: { id: 1 } }"
            class="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
          >
            <span class="text-sm sm:text-base">VIEW DETAILS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </router-link>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { active } = defineProps({ active: Boolean });
</script>

<style scoped>
/* 데스크톱에서만 hover 시 li 높이 증가 (모바일은 고정) */
@media (min-width: 768px) {
  .project-item:hover {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>
