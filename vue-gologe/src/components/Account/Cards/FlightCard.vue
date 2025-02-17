<template>
  <!-- TODO: переверстати карточку(проблеми з адаптивом!!!) -->
  <!-- Flight Card wrapper Start -->
  <div class="history-wrapper">
    <!-- Container for all Column Start -->
    <div class="history-column-wrapper">
      <!-- Top wrapper Start -->
      <div class="history-top-wrapper">
        <!-- Card Image -->
        <img
          src="@/assets/images/png/emirates.png"
          alt="Emirates"
          class="ph:hidden"
        />

        <!-- Container for From and To Start -->
        <div class="history-left-side-wrapper">
          <!-- Container for From Start -->
          <div class="history-left-content">
            <!-- Title Start -->
            <h1 class="history-left-content-title">Newark(EWR)</h1>
            <!-- Title End -->

            <!-- Text Start -->
            <h2 class="history-left-content-text">12:00 pm</h2>
            <!-- Text End -->
          </div>
          <!-- Container for From End -->

          <!-- Dash Symbol Start -->
          <div class="history-left-content-line">&mdash;</div>
          <!-- Dash Symbol End -->

          <!-- Container for To Start -->
          <div class="history-left-content">
            <!-- Title Start -->
            <h1 class="history-left-content-title">Newark(EWR)</h1>
            <!-- Title End -->

            <!-- Text Start -->
            <h2 class="history-left-content-text">12:00 pm</h2>
            <!-- Text End -->
          </div>
          <!-- Container for To End -->
        </div>
        <!-- Container for From and To End -->
      </div>
      <!-- Top wrapper End -->

      <!-- Dividing line Start -->
      <div class="history-vertical-line"></div>
      <!-- Dividing line Start -->

      <!-- Center wrapper Start -->
      <div class="history-center-wrapper">
        <!-- Container for Date and Flight Time Start -->
        <div class="history-right-wrapper">
          <!-- Flight Date Container Start -->
          <div class="history-right-content">
            <!-- Flight Date Image -->
            <img src="@/assets/images/svg/UI/date.svg" alt="date" />

            <!-- Container for Text Start -->
            <div class="history-right-column">
              <!-- Title for Date Start -->
              <p class="history-right-title">
                {{ $t("Account.History.date") }}
              </p>
              <!-- Title for Date End -->

              <!-- Text for Date Start -->
              <p class="history-right-text">12-11-22</p>
              <!-- Text for Date End -->
            </div>
            <!-- Container for Text End -->
          </div>
          <!-- Flight Date Container End -->

          <!-- Flight Time Container Start -->
          <div class="history-right-content">
            <!-- Flight Time Image -->
            <img
              src="@/assets/images/svg/UI/history-flight.svg"
              alt="history-flight"
            />

            <!-- Container for Time Start -->
            <div class="history-right-column">
              <!-- Title for Time Start -->
              <p class="history-right-title">
                {{ $t("Account.History.time") }}
              </p>
              <!-- Title for Time End -->

              <!-- Text for Time Start -->
              <p class="history-right-text">6:00</p>
              <!-- Text for Time End -->
            </div>
            <!-- Container for Time End -->
          </div>
          <!-- Flight Time Container End -->
        </div>
        <!-- Container for Date and Flight Time End -->

        <!-- Container for Gate and Seat Start max-w-[280px]  -->
        <div class="history-right-wrapper">
          <!-- Flight Gate Container Start -->
          <div class="history-right-content">
            <!-- Flight Gate Image -->
            <img
              src="@/assets/images/svg/UI/history-gate.svg"
              alt="history-gate"
            />

            <!-- Containet for text Start -->
            <div class="history-right-column">
              <!-- Title for Gate Start -->
              <p class="history-right-title">
                {{ $t("Account.History.gate") }}
              </p>
              <!-- Title for Gate End -->

              <!-- Text for Gate Start -->
              <p class="history-right-text">A12</p>
              <!-- Text for Gate End -->
            </div>
            <!-- Containet for text End -->
          </div>
          <!-- Flight Gate Container End -->

          <!-- Flight Seat Number Container Start -->
          <div class="history-right-content">
            <!-- Flight Seat Image -->
            <img
              src="@/assets/images/svg/UI/history-seat.svg"
              alt="history-seat"
            />

            <!-- Containet for text Start -->
            <div class="history-right-column">
              <!-- Title for Seat Start -->
              <p class="history-right-title">
                {{ $t("Account.History.seat") }}
              </p>
              <!-- Title for Seat End -->

              <!-- Text for Seat Start -->
              <p class="history-right-text">125</p>
              <!-- Text for Seat End -->
            </div>
            <!-- Containet for text End -->
          </div>
          <!-- Flight Seat Number Container End -->
        </div>
        <!-- Container for Gate and Seat End -->
      </div>
      <!-- Center wrapper End -->
    </div>
    <!-- Container for all Column End -->

    <!-- Containers for placing buttons Start -->
    <div class="history-buttons-wrapper">
      <!-- Cover download button Start -->
      <CustomButton class="history-button bg-custom-lightgreen">
        <p class="history-button-text">{{ $t("Account.History.button") }}</p>
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
  <!-- Flight Card wrapper End -->
</template>
