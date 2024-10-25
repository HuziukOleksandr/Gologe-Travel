<template>
<!-- TODO: переверстати карточку(проблеми з адаптивом!!!) -->
  <!-- Stays Card wrapper Start -->
  <div class="history-wrapper">
    <!-- Container for all Column Start -->
    <div class="history-column-wrapper">
      <!-- Top wrapper Start -->
      <div class="history-top-wrapper">
        <!-- Card Image -->
        <img src="@/assets/images/png/CVK.png" alt="CVK" class="ph:hidden"/>

        <!-- Container for In and Out Start -->
        <div class="history-left-side-wrapper">
          <!-- Container for Check-In Start -->
          <div class="history-left-content">
            <!-- Title Start -->
            <h1 class="history-left-content-title">
              {{ $t("Account.History.check-In") }}
            </h1>
            <!-- Title End -->

            <!-- Text Start -->
            <h2 class="history-left-content-text">Thur, Dec 8</h2>
            <!-- Text End -->
          </div>
          <!-- Container for Check-In End -->

          <!-- Dash Symbol Start -->
          <div class="history-left-content-line">&mdash;</div>
          <!-- Dash Symbol End -->

          <!-- Container for Check-Out Start -->
          <div class="history-left-content">
            <!-- Title Start -->
            <h1 class="history-left-content-title">
              {{ $t("Account.History.check-Out") }}
            </h1>
            <!-- Title End -->

            <!-- Text Start -->
            <h2 class="history-left-content-text">Fri, Dec 10</h2>
            <!-- Text End -->
          </div>
          <!-- Container for Check-Out End -->
        </div>
        <!-- Container for In and Out End -->
      </div>
      <!-- Top wrapper End -->

      <!-- Dividing line Start -->
      <div class="history-vertical-line"></div>
      <!-- Dividing line Start -->

      <!-- Center wrapper Start -->
      <div class="history-center-wrapper">
        <!-- Container for Check-In-Time and Check-Out-Time Time Start -->
        <div class="history-right-wrapper">
          <!-- Container for Check-In-Time Start -->
          <div class="history-right-content">
            <!-- Stays Check-In-Time Image -->
            <img
              src="@/assets/images/svg/UI/history-flight.svg"
              alt="history-flight"
            />

            <!-- Container for Text Start -->
            <div class="history-right-column ">
              <!-- Title Start -->
              <p class="history-right-title">
                {{ $t("Account.History.check-In-Time") }}
              </p>
              <!-- Title End -->

              <!-- Text Start -->
              <p class="history-right-text">12:00pm</p>
              <!-- Text Start -->
            </div>
            <!-- Container for Text End -->
          </div>
          <!-- Container for Сheck-In-Time End -->

          <!-- Container for Сheck-Out-Time Start -->
          <div class="history-right-content">
            <!-- Stays Сheck-Out-Time Image -->
            <img
              src="@/assets/images/svg/UI/history-flight.svg"
              alt="history-flight"
            />
            <!-- Container for Text Start -->
            <div class="history-right-column">
              <!-- Title Start -->
              <p class="history-right-title">
                {{ $t("Account.History.check-Out-Time") }}
              </p>
              <!-- Title Start -->

              <!-- Text Start -->
              <p class="history-right-text">6:00pm</p>
              <!-- Text End -->
            </div>
            <!-- Container for Text End -->
          </div>
          <!-- Container for Сheck-Out-Time Start -->
        </div>
        <!-- Container for Check-In-Time and Check-Out-Time Time End -->

        <!-- Container for Room Time Start -->
        <div class="history-right-wrapper">
          <!-- Container for Room Time Start -->
          <div class="history-right-content">
            <!-- Stays Room Image -->
            <img
              src="@/assets/images/svg/UI/history-gate.svg"
              alt="history-gate"
            />
            <!-- Container for Room Start -->
            <div class="history-right-column">
              <!-- Title Start -->
              <p class="history-right-title">
                {{ $t("Account.History.room") }}
              </p>
              <!-- Title End -->

              <!-- Text Start -->
              <p class="history-right-text">On arrival</p>
              <!-- Text End -->
            </div>
            <!-- Container for Room End -->
          </div>
          <!-- Container for Room Time End -->
        </div>
        <!-- Container for Room Time End -->
      </div>
      <!-- Container for all Column End -->
    </div>
    <!-- Center wrapper End -->

    <!-- Containers for placing buttons Start -->
    <div class="history-buttons-wrapper">
      <!-- Cover download button Start -->
      <CustomButton class="history-button bg-custom-lightgreen">
        <p class="history-button-text">
          {{ $t("Account.History.button") }}
        </p>
      </CustomButton>
      <!-- Cover download End -->

      <!-- Button 'Go to' Start -->
      <CustomButton class="history-button border-custom-lightgreen border-2">
        <!-- Button Image -->
        <img
          src="@/assets/images/svg/UI/chevron-forward.svg"
          alt="chevron-forward"
          class="w-[16px]"
        />
      </CustomButton>
      <!-- Button 'Go to' End -->
    </div>
    <!-- Containers for placing buttons End -->
  </div>
  <!-- Stays Card wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped></style>
