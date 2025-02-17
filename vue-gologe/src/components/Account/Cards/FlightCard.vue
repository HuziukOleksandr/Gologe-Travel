<template>
  <!-- TODO: переверстати карточку(проблеми з адаптивом!!!) -->
  <div class="history-wrapper">
    <div class="history-column-wrapper">
      <div class="history-top-wrapper">
        <img
          src="@/assets/images/png/emirates.png"
          alt="Emirates"
          class="ph:hidden"
        />

        <div class="history-left-side-wrapper">
          <div class="history-left-content">
            <h1 class="history-left-content-title">Newark(EWR)</h1>
            <h2 class="history-left-content-text">12:00 pm</h2>
          </div>
          <div class="history-left-content-line">&mdash;</div>
          <div class="history-left-content">
            <h1 class="history-left-content-title">Newark(EWR)</h1>
            <h2 class="history-left-content-text">12:00 pm</h2>
          </div>
        </div>
      </div>
      <div class="history-vertical-line"></div>
      <div class="history-center-wrapper">
        <div class="history-right-wrapper">
          <div class="history-right-content">
            <img src="@/assets/images/svg/UI/date.svg" alt="date" />
            <div class="history-right-column">
              <p class="history-right-title">
                {{ $t("Account.History.date") }}
              </p>
              <p class="history-right-text">12-11-22</p>
            </div>
          </div>
          <div class="history-right-content">
            <img
              src="@/assets/images/svg/UI/history-flight.svg"
              alt="history-flight"
            />
            <div class="history-right-column">
              <p class="history-right-title">
                {{ $t("Account.History.time") }}
              </p>
              <p class="history-right-text">6:00</p>
            </div>
          </div>
        </div>
        <div class="history-right-wrapper">
          <div class="history-right-content">
            <img
              src="@/assets/images/svg/UI/history-gate.svg"
              alt="history-gate"
            />
            <div class="history-right-column">
              <p class="history-right-title">
                {{ $t("Account.History.gate") }}
              </p>
              <p class="history-right-text">A12</p>
            </div>
          </div>
          <div class="history-right-content">
            <img
              src="@/assets/images/svg/UI/history-seat.svg"
              alt="history-seat"
            />
            <div class="history-right-column">
              <p class="history-right-title">
                {{ $t("Account.History.seat") }}
              </p>
              <p class="history-right-text">125</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="history-buttons-wrapper">
      <CustomButton class="history-button bg-custom-lightgreen">
        <p class="history-button-text">{{ $t("Account.History.button") }}</p>
      </CustomButton>
      <CustomButton class="history-button border-custom-lightgreen border-2">
        <img
          src="@/assets/images/svg/UI/chevron-forward.svg"
          alt="chevron-forward"
          class="w-[16px]"
        />
      </CustomButton>
    </div>
  </div>
</template>
