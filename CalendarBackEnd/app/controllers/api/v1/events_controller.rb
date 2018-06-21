class Api::V1::EventsController < ApplicationController

  before_action :set_event, only: [:show, :update, :destroy]
      # GET /events

      def index
        @events = Event.order('created_at ASC');
        render json: @events
      end

      # GET /events/1
      def show
        @event = Event.find(params[:id])
        render json: @event
      end

      # POST /events

      def create
        @event = Event.new(event_params)
          if @event.save
            render json: @event, status: :created, location:        api_v1_event_url(@event)
          else
            render json: @event.errors, status: :unprocessable_entity
          end
      end
      
      # PATCH/PUT /events/1

      def update
        @event = Event.find(params[:id])
          if @event.update(event_params)
            render json: @event
          else
            render json: @event.errors, status: :unprocessable_entity
          end
      end
      
      # DELETE /events/1

      def destroy
        event = Event.find(params[:id])
          @event.destroy
      end

      private
      
      def set_event
        @event = Event.find(params[:id])
       end

      def event_params
        params.permit(:title, :description, :start_time, :end_time)
      end

    end
  